<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$t('title')"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/converter')">{{ $t('unitconverters') }}</Button>
      <label>{{ $i18n.locale }}</label>
    </StackLayout>

  </Page>
</template>

<i18n>
{
    "en": {
        "title": "SailLibre HomePage",
        "unitconverters": "Unit converters"
    },
    "fr": {
        "title": "SailLibre - Accueil",
        "unitconverters": "Convertisseurs d'unité"
    }
}
</i18n>

<script>
  export default {
    mounted: function() {
      this.$store.commit('update');
      this.$i18n.locale = this.$store.state.lang.locale;
    },
  }
</script>
