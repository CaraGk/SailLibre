module.exports = {
  template: `
    <Page class="page">
      <ActionBar class="action-bar" :title="$route.meta.title"/>
      <StackLayout>
        <Button text="Unit converters" @tap="$router.push('/converter')"/>
    </Page>
  `,
};
