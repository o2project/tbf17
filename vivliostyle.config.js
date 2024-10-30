const TITLE = 'trapezium.css';

const pdfOutputDir = process.env.PRESS_ONLY === 'true' ? './dist/press' : './dist/pdf';
const pdfConfig = {
  path: `${pdfOutputDir}/${TITLE}.pdf`,
  format: 'pdf',
};
const webpubConfig = {
  path: './dist/webpub/',
  format: 'webpub',
};

module.exports = {
  title: TITLE,
  author: 'kubosho',
  language: 'ja',
  size: 'JIS-B5',
  theme: './node_modules/@o2project/vivliostyle-theme-o2project/lib/print_jis_b5.css',
  entry: [
    {
      path: './entries/book_title.md',
      theme: './node_modules/@o2project/vivliostyle-theme-o2project/lib/book_title.css',
    },
    {
      path: './entries/toc.md',
      rel: 'contents',
      theme: './node_modules/@o2project/vivliostyle-theme-o2project/lib/toc.css',
    },
    './entries/prologue.md',
    './entries/south.md',
    './entries/west.md',
    './entries/east.md',
    './entries/north.md',
    {
      path: './entries/colophon.md',
      title: '奥付',
      theme: './node_modules/@o2project/vivliostyle-theme-o2project/lib/book_information.css',
    },
  ],
  output: [pdfConfig, webpubConfig],
  workspaceDir: '.temp',
  toc: {
    title: '目次',
  },
  vfm: {
    hardLineBreaks: true,
  },
};
