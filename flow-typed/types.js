// @flow

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
}

export type Show {
    title: string, description: string, trailer: string, poster: string, year: string, imdbID: string
}
/**
 object call hot, accept path which is string, callback that reutrns void which doesn't reutnr anything, and that itself won't return anything
 */