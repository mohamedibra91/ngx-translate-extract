import { Node, NamedImports, ClassDeclaration, ConstructorDeclaration, CallExpression, Expression } from 'typescript';
export declare function getNamedImports(node: Node, moduleName: string): NamedImports[];
export declare function getNamedImportAlias(node: Node, moduleName: string, importName: string): string | null;
export declare function findClassDeclarations(node: Node): ClassDeclaration[];
export declare function findClassPropertyByType(node: ClassDeclaration, type: string): string | null;
export declare function findConstructorDeclaration(node: ClassDeclaration): ConstructorDeclaration;
export declare function findMethodParameterByType(node: Node, type: string): string | null;
export declare function findMethodCallExpressions(node: Node, propName: string, fnName: string | string[]): CallExpression[];
export declare function findClassPropertyConstructorParameterByType(node: ClassDeclaration, type: string): string | null;
export declare function findClassPropertyDeclarationByType(node: ClassDeclaration, type: string): string | null;
export declare function findFunctionCallExpressions(node: Node, fnName: string | string[]): CallExpression[];
export declare function findPropertyCallExpressions(node: Node, prop: string, fnName: string | string[]): CallExpression[];
export declare function getStringsFromExpression(expression: Expression): string[];
