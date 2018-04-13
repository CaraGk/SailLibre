module.exports = {
  template: `
    <Page class="page">
      <ActionBar class="action-bar" :title="$route.meta.title"/>
      <StackLayout>
        <Button text="Distance converter" @tap="$router.push('/converter')"/>
    </Page>
  `,
};
