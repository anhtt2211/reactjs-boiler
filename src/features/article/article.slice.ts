import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleRO, ArticlesFilters, MultipleArticles } from 'types';

export interface ArticleState {
  articles: readonly Article[];
  article: Article;
  articlesCount: number;
  isLoading: boolean;
  error: string;
}

const initialState: ArticleState = {
  articles: [],
  article: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      following: false,
      username: '',
      bio: '',
      image: '',
    },
  },
  articlesCount: 0,
  isLoading: false,
  error: '',
};

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    startLoadingArticles: () => initialState,
    loadGlobalArticlesRequest: (
      state,
      action: PayloadAction<ArticlesFilters>
    ) => {
      state.isLoading = true;
    },
    loadGlobalArticlesSuccess: (
      state,
      { payload }: PayloadAction<MultipleArticles>
    ) => {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
      state.isLoading = false;
    },
    loadGlobalArticlesFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    loadYourFeedsReq: (state, action: PayloadAction<ArticlesFilters>) => {
      state.isLoading = true;
    },
    loadYourFeedsSuccess: (
      state,
      { payload }: PayloadAction<MultipleArticles>
    ) => {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
      state.isLoading = false;
    },
    loadYourFeedsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    loadArticleRequest: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = true;
    },
    loadArticleSuccess: (state, { payload }: PayloadAction<ArticleRO>) => {
      state.isLoading = false;
      state.article = payload.article;
    },
    loadArticleFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    favoriteArticleReq: (
      state,
      {
        payload: { slug, favorited },
      }: PayloadAction<{ slug: string; favorited: boolean }>
    ) => {},
    favoriteArticleSuccess: (state, { payload }: PayloadAction<ArticleRO>) => {
      state.articles = state.articles.map((article) =>
        article.slug === payload.article.slug ? payload.article : article
      );
    },
    favoriteArticleFailure: (state) => {},

    resetArticle: (state) => {
      state.article = {
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: [],
        createdAt: '',
        updatedAt: '',
        favorited: false,
        favoritesCount: 0,
        author: {
          following: false,
          username: '',
          bio: '',
          image: '',
        },
      };
    },
  },
});

export const {
  startLoadingArticles,
  loadGlobalArticlesRequest,
  loadGlobalArticlesSuccess,
  loadGlobalArticlesFailure,
  loadYourFeedsReq,
  loadYourFeedsSuccess,
  loadYourFeedsFailure,
  loadArticleRequest,
  loadArticleSuccess,
  loadArticleFailure,
  favoriteArticleReq,
  favoriteArticleSuccess,
  favoriteArticleFailure,
  resetArticle,
} = slice.actions;

export default slice.reducer;
