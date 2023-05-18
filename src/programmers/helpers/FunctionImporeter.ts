import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

export class FunctionImporter {
    private readonly used_: Set<string> = new Set();
    private readonly local_: Set<string> = new Set();
    private sequence_: number = 0;

    public constructor(private readonly tsc_: typeof ts) {}

    public empty(): boolean {
        return this.used_.size === 0;
    }

    public use(name: string): ts.Identifier {
        this.used_.add(name);
        return this.tsc_.factory.createIdentifier("$" + name);
    }

    public useLocal(name: string): string {
        this.local_.add(name);
        return name;
    }

    public hasLocal(name: string): boolean {
        return this.local_.has(name);
    }

    public declare(modulo: ts.LeftHandSideExpression): ts.Statement[] {
        return [...this.used_].map((name) =>
            StatementFactory.constant(this.tsc_)(
                "$" + name,
                IdentifierFactory.access(this.tsc_)(
                    this.tsc_.factory.createParenthesizedExpression(
                        this.tsc_.factory.createAsExpression(
                            modulo,
                            TypeFactory.keyword(this.tsc_)("any"),
                        ),
                    ),
                )(name),
            ),
        );
    }

    public increment(): number {
        return ++this.sequence_;
    }

    public trace(): void {
        console.log(...this.used_);
        console.log(...this.local_);
    }
}
