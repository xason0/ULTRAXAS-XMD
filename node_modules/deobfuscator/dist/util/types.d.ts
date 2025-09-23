import * as ESTree from 'estree';
/**
 * Update properties on node
 * @param node AST node
 * @param props kv to update
 */
export declare function sp<T extends ESTree.Node>(node: ASTNode<any>, props: Partial<ASTNode<T>>): node is ASTNode<T>;
export declare function getBlockId(node: BlockStatement): BlockId;
export declare type BlockId = string;
export declare type NodeType = ESTree.Node['type'];
export declare type NodeByType<T extends NodeType> = ASTNode<Extract<ESTree.Node, {
    type: T;
}>>;
export declare type ASTNode<TType> = {
    [K in keyof TType]: TType[K] extends object ? ASTNode<TType[K]> : TType[K];
} & (TType extends ESTree.Node ? {
    start: number;
    end: number;
} : {});
export declare type BinaryOperator = ESTree.BinaryOperator;
export declare type Node = ASTNode<ESTree.Node>;
export declare type Identifier = ASTNode<ESTree.Identifier>;
export declare type Literal = ASTNode<ESTree.Literal>;
export declare type SimpleLiteral = ASTNode<ESTree.SimpleLiteral>;
export declare type RegExpLiteral = ASTNode<ESTree.RegExpLiteral>;
export declare type BigIntLiteral = ASTNode<ESTree.BigIntLiteral>;
export declare type Program = ASTNode<ESTree.Program>;
export declare type Function = ASTNode<ESTree.Function>;
export declare type FunctionDeclaration = ASTNode<ESTree.FunctionDeclaration>;
export declare type FunctionExpression = ASTNode<ESTree.FunctionExpression>;
export declare type ArrowFunctionExpression = ASTNode<ESTree.ArrowFunctionExpression>;
export declare type SwitchCase = ASTNode<ESTree.SwitchCase>;
export declare type CatchClause = ASTNode<ESTree.CatchClause>;
export declare type VariableDeclarator = ASTNode<ESTree.VariableDeclarator>;
export declare type Statement = ASTNode<ESTree.Statement>;
export declare type ExpressionStatement = ASTNode<ESTree.ExpressionStatement>;
export declare type BlockStatement = ASTNode<ESTree.BlockStatement>;
export declare type StaticBlock = ASTNode<ESTree.StaticBlock>;
export declare type EmptyStatement = ASTNode<ESTree.EmptyStatement>;
export declare type DebuggerStatement = ASTNode<ESTree.DebuggerStatement>;
export declare type WithStatement = ASTNode<ESTree.WithStatement>;
export declare type ReturnStatement = ASTNode<ESTree.ReturnStatement>;
export declare type LabeledStatement = ASTNode<ESTree.LabeledStatement>;
export declare type BreakStatement = ASTNode<ESTree.BreakStatement>;
export declare type ContinueStatement = ASTNode<ESTree.ContinueStatement>;
export declare type IfStatement = ASTNode<ESTree.IfStatement>;
export declare type SwitchStatement = ASTNode<ESTree.SwitchStatement>;
export declare type ThrowStatement = ASTNode<ESTree.ThrowStatement>;
export declare type TryStatement = ASTNode<ESTree.TryStatement>;
export declare type WhileStatement = ASTNode<ESTree.WhileStatement>;
export declare type DoWhileStatement = ASTNode<ESTree.DoWhileStatement>;
export declare type ForStatement = ASTNode<ESTree.ForStatement>;
export declare type ForInStatement = ASTNode<ESTree.ForInStatement>;
export declare type ForOfStatement = ASTNode<ESTree.ForOfStatement>;
export declare type VariableDeclaration = ASTNode<ESTree.VariableDeclaration>;
export declare type ClassDeclaration = ASTNode<ESTree.ClassDeclaration>;
export declare type Expression = ASTNode<ESTree.Expression>;
export declare type ThisExpression = ASTNode<ESTree.ThisExpression>;
export declare type ArrayExpression = ASTNode<ESTree.ArrayExpression>;
export declare type ObjectExpression = ASTNode<ESTree.ObjectExpression>;
export declare type YieldExpression = ASTNode<ESTree.YieldExpression>;
export declare type UnaryExpression = ASTNode<ESTree.UnaryExpression>;
export declare type UpdateExpression = ASTNode<ESTree.UpdateExpression>;
export declare type BinaryExpression = ASTNode<ESTree.BinaryExpression>;
export declare type AssignmentExpression = ASTNode<ESTree.AssignmentExpression>;
export declare type LogicalExpression = ASTNode<ESTree.LogicalExpression>;
export declare type MemberExpression = ASTNode<ESTree.MemberExpression>;
export declare type ConditionalExpression = ASTNode<ESTree.ConditionalExpression>;
export declare type SimpleCallExpression = ASTNode<ESTree.SimpleCallExpression>;
export declare type NewExpression = ASTNode<ESTree.NewExpression>;
export declare type SequenceExpression = ASTNode<ESTree.SequenceExpression>;
export declare type TemplateLiteral = ASTNode<ESTree.TemplateLiteral>;
export declare type TaggedTemplateExpression = ASTNode<ESTree.TaggedTemplateExpression>;
export declare type ClassExpression = ASTNode<ESTree.ClassExpression>;
export declare type MetaProperty = ASTNode<ESTree.MetaProperty>;
export declare type AwaitExpression = ASTNode<ESTree.AwaitExpression>;
export declare type ImportExpression = ASTNode<ESTree.ImportExpression>;
export declare type ChainExpression = ASTNode<ESTree.ChainExpression>;
export declare type PrivateIdentifier = ASTNode<ESTree.PrivateIdentifier>;
export declare type Property = ASTNode<ESTree.Property>;
export declare type PropertyDefinition = ASTNode<ESTree.PropertyDefinition>;
export declare type AssignmentProperty = ASTNode<ESTree.AssignmentProperty>;
export declare type Super = ASTNode<ESTree.Super>;
export declare type TemplateElement = ASTNode<ESTree.TemplateElement>;
export declare type SpreadElement = ASTNode<ESTree.SpreadElement>;
export declare type ObjectPattern = ASTNode<ESTree.ObjectPattern>;
export declare type ArrayPattern = ASTNode<ESTree.ArrayPattern>;
export declare type RestElement = ASTNode<ESTree.RestElement>;
export declare type AssignmentPattern = ASTNode<ESTree.AssignmentPattern>;
export declare type ClassBody = ASTNode<ESTree.ClassBody>;
export declare type MethodDefinition = ASTNode<ESTree.MethodDefinition>;
export declare type ImportDeclaration = ASTNode<ESTree.ImportDeclaration>;
export declare type ExportNamedDeclaration = ASTNode<ESTree.ExportNamedDeclaration>;
export declare type ExportDefaultDeclaration = ASTNode<ESTree.ExportDefaultDeclaration>;
export declare type ExportAllDeclaration = ASTNode<ESTree.ExportAllDeclaration>;
export declare type ImportSpecifier = ASTNode<ESTree.ImportSpecifier>;
export declare type ImportDefaultSpecifier = ASTNode<ESTree.ImportDefaultSpecifier>;
export declare type ImportNamespaceSpecifier = ASTNode<ESTree.ImportNamespaceSpecifier>;
export declare type ExportSpecifier = ASTNode<ESTree.ExportSpecifier>;
export declare type Pattern = ASTNode<ESTree.Pattern>;
export declare type CallExpression = ASTNode<ESTree.CallExpression>;
export declare type PropertyLiteral = Property & {
    key: Literal;
};
export declare type StringLiteral = Literal & {
    value: string;
};
export declare type NumericLiteral = Literal & {
    value: number;
};
export declare type BooleanLiteral = Literal & {
    value: boolean;
};
export declare type NumericUnaryExpression = UnaryExpression & {
    argument: NumericLiteral;
};
//# sourceMappingURL=types.d.ts.map