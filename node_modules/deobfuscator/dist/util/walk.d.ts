import * as ESTree from 'estree';
import { NodeType, NodeByType, Node } from './types';
declare type WalkerCallback<TState> = (node: ESTree.Node, state: TState) => void;
declare type WalkerFn<T extends NodeType, TState> = (node: NodeByType<T>, state: TState | Node[], ancestors: Node[]) => any;
declare type Visitors<TState> = {
    [type in NodeType]?: WalkerFn<type, TState>;
};
declare type RecursiveWalkerFn<T extends NodeType, TState> = (node: NodeByType<T>, state: TState | undefined, callback: WalkerCallback<TState>) => void;
declare type RecursiveVisitors<TState> = {
    [type in NodeType]?: RecursiveWalkerFn<type, TState>;
};
export declare function walk<TState>(node: Node, visitors: Visitors<TState>, base?: RecursiveVisitors<TState>, state?: TState, _override?: NodeType): Node;
export declare function findNodeAt<TNode extends Node>(node: Node, range: [number, number], test: TNode['type'], base?: RecursiveVisitors<{}>): TNode | undefined;
export {};
//# sourceMappingURL=walk.d.ts.map