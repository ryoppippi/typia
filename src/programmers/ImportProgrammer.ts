import ts from "typescript";
import { MapUtil } from "../utils/MapUtil";

export class ImportProgrammer {
  private assets_: Map<string, Asset> = new Map();

  public default(props: ImportProgrammer.IProps): ts.Identifier {
    const asset: Asset = this.take(props);
    asset.default ??= alias(props.name);
    return ts.factory.createIdentifier(asset.default);
  }

  public namespace(props: ImportProgrammer.IProps): ts.Identifier {
    const asset: Asset = this.take(props);
    asset.namespace ??= alias(props.name);
    return ts.factory.createIdentifier(asset.namespace);
  }

  public specific(props: ImportProgrammer.IProps): ts.Identifier {
    const asset: Asset = this.take(props);
    asset.instances.add(props.name);
    return ts.factory.createIdentifier(alias(props.name));
  }

  public internal(name: string): ts.Identifier {
    return this.specific({ library: `typia/lib/internal/${name}`, name });
  }

  public toStatements(): ts.ImportDeclaration[] {
    const statements: ts.ImportDeclaration[] = [];
    for (const asset of this.assets_.values()) {
      if (asset.namespace !== null)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              undefined,
              ts.factory.createNamespaceImport(
                ts.factory.createIdentifier(asset.namespace),
              ),
            ),
            ts.factory.createStringLiteral(asset.library),
          ),
        );
      if (asset.default !== null || asset.instances.size > 0)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              asset.default !== null
                ? ts.factory.createIdentifier(asset.default)
                : undefined,
              asset.instances.size > 0
                ? ts.factory.createNamedImports(
                    [...asset.instances].map((name) =>
                      ts.factory.createImportSpecifier(
                        false,
                        undefined,
                        ts.factory.createIdentifier(alias(name)),
                      ),
                    ),
                  )
                : undefined,
            ),
            ts.factory.createStringLiteral(asset.library),
            undefined,
          ),
        );
    }
    return statements;
  }

  private take(props: ImportProgrammer.IProps): Asset {
    return MapUtil.take(this.assets_)(props.library, () => ({
      library: props.library,
      default: null,
      namespace: null,
      instances: new Set(),
    }));
  }
}
export namespace ImportProgrammer {
  export interface IProps {
    library: string;
    name: string;
  }
}
interface Asset {
  library: string;
  default: string | null;
  namespace: string | null;
  instances: Set<string>;
}

const alias = (str: string) => `__${str}`;
