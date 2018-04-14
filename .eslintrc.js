module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error'],
    'no-console': 'error',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'import/prefer-default-export': ['off'],
  },
  globals: {
    g_HubId: true,
    g_img_url: true,
    jhe: true,
    CKEDITOR: true,
    AppGlobals: true,
    AppShared: true,
    AppUtil: true,
    ApiDataTable: true,
    Shared: true,
    PopupModal: true,
    PopupModal2: true,
    BackendItemTiles: true,
    Base64: true,
    CustomDomains: true,
    FilterTabs: true,
    HootsuiteApp: true,
    HubsPreview: true,
    IScroll: true,
    ItemEditContents: true,
    ItemSelector: true,
    Modernizr: true,
    NewCtaModal: true,
    ToggleSwitch: true,
    UiIcon: true,
    define: true, // used in our terrible UMD wrappers; will eventually be unneeded
    bindHubOptions: true,
    saveProgress: true,
    initDataTable: true,
    tb_remove: true,
    tb_register_callback: true,
    tb_show: true,
    ajaxBootstrapModal: true,
    buildBootstrapModal: true,
    showBootstrapModal: true,
    killBootstrapModal: true,
    buildFlashMessage: true,
    showFlashMessage: true,
    isValidEmail: true,
    initializeMixedContentListener: true,
  },
};
