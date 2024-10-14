const TITLE = 'Vivliostyle Base';

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
  theme: '@o2project/vivliostyle-theme-o2project',
  entry: ['./entries/introduction.md'],
  output: [pdfConfig, webpubConfig],
  workspaceDir: '.temp',
  toc: {
    title: '目次',
  },
  vfm: {
    hardLineBreaks: true,
  },
};
