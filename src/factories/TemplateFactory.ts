import type ts from "typescript/lib/tsclibrary";

export namespace TemplateFactory {
    export const generate =
        (tsc: typeof ts) =>
        (expressions: ts.Expression[]): ts.Expression => {
            if (expressions.every((exp) => tsc.isStringLiteral(exp)))
                return tsc.factory.createStringLiteral(
                    (expressions as ts.StringLiteral[])
                        .map((str) => str.text)
                        .join(""),
                );

            const it: IIterator = {
                value: "",
                index: 0,
            };
            gather(tsc)(expressions)(it);

            const head: ts.TemplateHead = tsc.factory.createTemplateHead(
                it.value,
            );
            const spans: ts.TemplateSpan[] = [];

            while (true) {
                const elem: ts.Expression = expressions[it.index++]!;
                gather(tsc)(expressions)(it);

                const broken: boolean = it.index === expressions.length;
                spans.push(
                    tsc.factory.createTemplateSpan(
                        elem,
                        broken
                            ? tsc.factory.createTemplateTail(it.value)
                            : tsc.factory.createTemplateMiddle(it.value),
                    ),
                );
                if (broken === true) break;
            }
            return tsc.factory.createTemplateExpression(head, spans);
        };

    const gather =
        (tsc: typeof ts) =>
        (expressions: ts.Expression[]) =>
        (it: IIterator): void => {
            const found: number = expressions.findIndex(
                (elem, index) =>
                    index >= it.index && !tsc.isStringLiteral(elem),
            );

            const last: number = found !== -1 ? found : expressions.length;
            it.value = expressions
                .slice(it.index, last)
                .map((elem) => (elem as ts.StringLiteral).text)
                .reduce((x, y) => x + y, "");
            it.index = last;
        };

    interface IIterator {
        value: string;
        index: number;
    }
}
