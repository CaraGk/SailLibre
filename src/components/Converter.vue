<template>
    <Page class="page">
      <ActionBar class="action-bar" :title="$t('title')">
        <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>

      <StackLayout v-if="selectedConverterIndex !== null">
        <Button class="btn btn-primary" :text="converters[selectedConverterIndex]" @tap="selectedConverterIndex=null"/>
        <TextField v-model="measurement" :hint="$t('measurementPlaceholder')" keyboardType="number"/>
        <SegmentedBar :items="segmentedUnits" v-model="selectedUnitIndex"/>

        <StackLayout class="p-5" v-if="measurement > 0">
            <FlexboxLayout flexDirection="row" justifyContent="space-between" v-for="unit in units[converters[selectedConverterIndex]]">
                <Label class="" textWrap=true :text="$t('convertText', { converter:$t(converters[selectedConverterIndex]), unit:$t(unit.name) })"/>
                <Label class="font-weight-bold" :text="convert(unit.convert[selectedUnitIndex])+' '+unit.short"/>
            </FlexboxLayout>
            <Label class="p-10" textWrap=true :text="$t('caution')"/>
        </StackLayout>
      </StackLayout>

      <StackLayout v-else>
        <Button v-for="(converter, id) in converters" :text="converter" @tap="selectedConverterIndex=id"/>
      </StackLayout>

    </Page>
</template>

<script>
export default {
  data() {
    return {
      converters: ["Distance", "Speed"],
      selectedConverterIndex: Number = 0,
      isSelectedConverter: Boolean = true,
      measurement: "",
      units: {
        "Distance": [
          {
              "name": 'nautical miles',
              "short": "nm",
              "convert": [1, 1/1.15078, 1/1.852],
          },
          {
              "name": 'miles',
              "short": "mi",
              "convert": [1.15078, 1, 1/1.609344],
          },
          {
              "name": 'kilometers',
              "short": "km",
              "convert": [1.852, 1.609344, 1],
          }
        ],
        "Speed": [
          {
            "name": 'knots',
            "short": "kts",
            "convert": [
              1,
              {1:0, 4:1, 7:2, 11:3, 17:4, 22:5, 28:6, 34:7, 41:8, 48:9, 56:10, 64:11, 120:12},
            ],
          },
          {
            "name": 'beaufort',
            "short": "bft",
            "convert": [
              {0:1, 1:4, 2:7, 3:11, 4:17, 5:22, 6:28, 7:34, 8:41, 9:48, 10:56, 11:64, 12:120},
              {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:12},
            ],
          }
        ],
      },
      selectedUnitIndex: Number = 0,
    };
  },
  computed: {
      segmentedUnits () {
        var segmentedBarModule = require("ui/segmented-bar");
        var segmentedBar = [];
        var units = this.units[this.converters[this.selectedConverterIndex]];
        units.forEach(function(unit) {
          let item = new segmentedBarModule.SegmentedBarItem();
          item.title = unit.short;
          segmentedBar.push(item);
        });
        return segmentedBar;
      },
  },
  methods: {
    convert(c) {
      if (typeof c == "object") {
        for (const key of Object.keys(c)) {
          if (this.measurement >= c[key]) {
            var value = key;
          } else if (this.measurement < c[key]) {
            return value;
          }
        }
      } else if (typeof c == "number") {
        return Math.round(this.measurement*c*100)/100;
      } else {
        return false;
      }
    },
  },
  mounted: function() {
    this.$store.commit('update');
    this.$i18n.locale = this.$store.state.lang.locale;
  }
};
</script>

<i18n>
    {
      "en": {
        "title": "Unit converters",
        "measurementPlaceholder": "Enter measurment...",
        "caution": "All conversions are approximative but should be precise enough for real use.",
        "Distance": "Distance",
        "Speed": "Speed",
        "nautical miles": "nautical miles",
        "miles": "miles",
        "kilometers": "kilometers",
        "knots": "knots",
        "beaufort": "Beaufort",
        "convertText": "{converter} in {unit}:"
      },
      "fr": {
        "title": "Convertisseurs d'unité",
        "measurementPlaceholder": "Indiquez la mesure...",
        "caution": "Toutes les conversions sont approximatives mais suffisantes pour un usage réel.",
        "Distance": "Distance",
        "Speed": "Vitesse",
        "nautical miles": "miles nautiques",
        "miles": "miles",
        "kilometers": "kilomètres",
        "knots": "nœuds",
        "beaufort": "Beaufort",
        "convertText": "{converter} en {unit} :"
      }
    }
</i18n>
