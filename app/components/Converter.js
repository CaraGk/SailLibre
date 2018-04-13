module.exports = {
  data() {
    return {
      converters: ["Distance", "Speed"],
      selectedConverterIndex: number = 0,
      isSelectedConverter: bool = true,
      measurement: "",
      units: {
        "Distance": [
          {
              "name": "nautical miles",
              "short": "nm",
              "convert": [1, 1/1.15078, 1/1.852],
          },
          {
              "name": "miles",
              "short": "mi",
              "convert": [1.15078, 1, 1/1.609344],
          },
          {
              "name": "kilometers",
              "short": "km",
              "convert": [1.852, 1.609344, 1],
          }
        ],
        "Speed": [
          {
            "name": "knots",
            "short": "kts",
            "convert": [1],
          },
        ],
      },
      selectedUnitIndex: number = 0,
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
            return Math.round(this.measurement*c*100)/100;
        },
    },
  template: `
    <Page class="page">
      <ActionBar class="action-bar" :title="$route.meta.title">
        <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout v-if="selectedConverterIndex !== null">
        <Button :text="converters[selectedConverterIndex]" @tap="selectedConverterIndex=null"/>
        <TextField v-model="measurement" hint="Enter measurement..." keyboardType="number"/>
        <SegmentedBar :items="segmentedUnits" v-model="selectedUnitIndex"/>
        <StackLayout class="p-20" v-if="measurement > 0">
            <FlexboxLayout flexDirection="row" justifyContent="left" v-for="unit in units[converters[selectedConverterIndex]]">
                <Label class="push-left" textWrap=true :text="converters[selectedConverterIndex]+' in '+unit.name+': '"/>
                <Label class="font-weight-bold push-right" :text="convert(unit.convert[selectedUnitIndex])+' '+unit.short"/>
            </FlexboxLayout>
        </StackLayout>
      </StackLayout>
      <StackLayout v-else>
        <Button v-for="(converter, id) in converters" :text="converter" @tap="selectedConverterIndex=id"/>
      </StackLayout>
    </Page>
  `,
};
