// @flow

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
}

export type Show {
    title: string, description: string, trailer: string, poster: string, year: string, imdbID: string
}

declare type ActionType = 'SET_SEARCH_TERM'

declare type ActionT<A: ActionType, P> {|
    type: A,
    payload: P
|}

export type Action = ActionT<'SET_SEARCH_TERM', string>;
/**
facebook f8 app (how to use flow with diff components)


 object call hot, accept path which is string, callback that reutrns void which doesn't reutnr anything, and that itself won't return anything
 */