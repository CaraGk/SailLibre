module.exports = {
  template: `
    <Page class="page">
      <ActionBar class="action-bar" :title="$route.meta.title"/>
      <StackLayout>
        <Button :text="$i18n.t('unitconverters')" @tap="$router.push('/converter')"/>
    </Page>
  `,
  i18n: {
    locale: 'fr',
    messages: {
      en: {
        unitconverters: 'Unit converters'
      },
      fr: {
        unitconverters: "Convertisseurs d'unité"
      }
    }
  }
};
