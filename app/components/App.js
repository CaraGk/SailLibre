const Converter = require('./Converter');

module.exports = {
  template: `
    <Page class="page">
      <ActionBar class="action-bar" title="Distance converter"/>
      <Converter/>
    </Page>
  `,
  components: {
    Converter,
  },
};
