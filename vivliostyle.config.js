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
  size: 'JIS-A5',
  theme: '@o2project/vivliostyle-theme-o2project',
  entry: [
    './entries/prologue.md',
    './entries/south.md',
    './entries/west.md',
    './entries/east.md',
    './entries/north.md',
    './entries/colophon.md',
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
