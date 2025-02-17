// eslint-disable-next-line import/prefer-default-export
export const API_ROUTES = {
    BASE: '/',
    FACTS: {
        GET_ALL: 'fact/getAll',
        GET: 'fact/getById',
        GET_BY_STREETCODE_ID: 'fact/getByStreetcodeId',
        CREATE: 'fact/create',
        UPDATE: 'fact/update',
        DELETE: 'fact/delete',
    },
    PARTNERS: {
        GET_ALL: 'partners/getAll',
        GET_SPONSORS: 'partners/getSponsors',
        GET: 'partners/getById',
        GET_BY_STREETCODE_ID: 'partners/getByStreetcodeId',
        CREATE: 'partners/create',
        UPDATE: 'partners/update',
        DELETE: 'partners/delete',
    },
    TAGS: {
        GET_ALL: 'tag/getAll',
        GET: 'tag/getById',
        GET_BY_TITLE: 'tag/getByTitle',
        GET_BY_STREETCODE_ID: 'tag/getByStreetcodeId',
        CREATE: 'tag/create',
        UPDATE: 'tag/update',
        DELETE: 'tag/delete',
    },
    TERMS: {
        GET_ALL: 'term/getAll',
        GET: 'term/getById',
        CREATE: 'term/create',
        UPDATE: 'term/update',
        DELETE: 'term/delete',
    },
    TEXTS: {
        GET_ALL: 'text/getAll',
        CREATE: 'text/create',
        GET_BY_STREETCODE_ID: 'text/getByStreetcodeId',
        GET: 'text/getById',
        UPDATE: 'text/update',
        DELETE: 'text/delete',
    },
    TIMELINE: {
        GET_ALL: 'timelineItem/getAll',
        GET: 'timelineItem/getById',
        GET_BY_STREETCODE_ID: 'timelineItem/getByStreetcodeId',
        CREATE: 'timelineItem/create',
        UPDATE: 'timelineItem/update',
        DELETE: 'timelineItem/delete',
    },
    TOPONYMS: {
        GET_ALL: 'toponym/getAll',
        CREATE: 'toponym/create',
        GET: 'toponym/getById',
        GET_BY_STREETCODE_ID: 'toponym/getByStreetcodeId',
        GET_BY_NAME: 'toponym/getByName',
        UPDATE: 'toponym/update',
        DELETE: 'toponym/delete',
    },
    SOURCES: {
        GET_ALL_CATEGORIES: 'sources/getAllCategories',
        GET: 'sources/getCategoryById',
        GET_CATEGORIES_BY_STREETCODE_ID: 'sources/getCategoriesByStreetcodeId',
        GET_SUBCATEGORIES_BY_CATEGORY_ID: 'sources/GetSubCategoriesByCategoryId',
        CREATE: 'sources/create',
        UPDATE: 'sources/update',
        DELETE: 'sources/delete',
    },
    TRANSACTION_LINKS: {
        GET_ALL: 'transactLinks/getAll',
        GET: 'transactLinks/getById',
        CREATE: 'transactLinks/create',
        UPDATE: 'transactLinks/update',
        DELETE: 'transactLinks/delete',
    },
    AUDIOS: {
        GET_ALL: 'audios/getAll',
        GET: 'audios/getById',
        GET_BY_STREETCODE_ID: 'audio/getByStreetcodeId',
        CREATE: 'audios/create',
        UPDATE: 'audios/update',
        DELETE: 'audios/delete',
    },
    VIDEOS: {
        GET_ALL: 'video/getAll',
        GET_BY_STREETCODE_ID: 'video/getByStreetcodeId',
        GET: 'video/getById',
        CREATE: 'video/create',
        UPDATE: 'video/update',
        DELETE: 'video/delete',
    },
    IMAGES: {
        GET_ALL: 'images/getAll',
        GET: 'image/getById',
        GET_BY_STREETCODE_ID: 'image/getByStreetcodeId',
        CREATE: 'images/create',
        UPDATE: 'images/update',
        DELETE: 'images/delete',
    },
    ARTS: {
        GET_ALL: 'arts/getAll',
        GET: 'arts/getById',
        CREATE: 'arts/create',
        UPDATE: 'arts/update',
        DELETE: 'arts/delete',
    },
    STREETCODE_ARTS: {
        GET_ALL: 'streetcodeArt/getAll',
        GET_BY_STREETCODE_ID: 'streetcodeArt/getByStreetcodeId',
    },
    RELATED_FIGURES: {
        GET_ALL: 'relatedFigure/getAll',
        GET: 'relatedFigure/getById',
        GET_BY_STREETCODE_ID: 'relatedFigure/getByStreetcodeId',
        CREATE: 'relatedFigure/create',
        UPDATE: 'relatedFigure/update',
        DELETE: 'relatedFigure/delete',
    },
    STREETCODES: {
        GET_ALL: 'streetcode/getAll',
        GET_EVENTS: 'streetcode/getEvents',
        GET_PERSONS: 'streetcode/getPersons',
        GET: 'streetcode/getById',
        GET_BY_NAME: 'streetcode/getByName',
        GET_BY_TAG_ID: 'streetcode/getByTagId',
        GET_BY_INDEX: 'streetcode/getByIndex',
        CREATE: 'streetcode/create',
        UPDATE: 'streetcode/update',
        DELETE: 'streetcode/delete',
    },
    SUBTITLES: {
        GET_ALL: 'subtitle/getAll',
        GET: 'subtitle/getById',
        GET_BY_STREETCODE_ID: 'subtitle/getByStreetcodeId',
        CREATE: 'subtitle/create',
        UPDATE: 'subtitle/update',
        DELETE: 'subtitle/delete',
    },
    STREETCODE_COORDINATES: {
        GET_ALL: 'coordinate/getAll',
        GET: 'coordinate/getById',
        GET_BY_STREETCODE_ID: 'coordinate/getByStreetcodeId',
        CREATE: 'coordinate/create',
        UPDATE: 'coordinate/update',
        DELETE: 'coordinate/delete',
    },
};
