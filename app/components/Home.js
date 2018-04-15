module.exports = {
  template: `
    <Page class="page">
      <ActionBar class="action-bar" :title="$t('title')"/>
      <StackLayout>
        <Button :text="$i18n.t('unitconverters')" @tap="$router.push('/converter')"/>
    </Page>
  `,
  i18n: {
    locale: 'fr',
    messages: {
      en: {
        title: 'SailLibre HomePage',
        unitconverters: 'Unit converters'
      },
      fr: {
        title: 'SailLibre - Accueil',
        unitconverters: "Convertisseurs d'unité"
      }
    }
  }
};
