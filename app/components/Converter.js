module.exports = {
  data() {
    return {
      distance: "",
      units: [
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
      selectedUnitIndex: number = 0,
    };
  },
  computed: {
      segmentedUnits () {
        var segmentedBarModule = require("ui/segmented-bar");
        var segmentedBar = [];
        this.units.forEach(function(unit) {
          let item = new segmentedBarModule.SegmentedBarItem();
          item.title = unit.short;
          segmentedBar.push(item);
        });
        return segmentedBar;
      },
  },
    methods: {
        convert(c) {
            return Math.round(this.distance*c*100)/100;
        },
    },
  template: `
      <StackLayout>
        <TextField v-model="distance" hint="Enter distance..." keyboardType="number"/>
        <SegmentedBar :items="segmentedUnits" v-model="selectedUnitIndex"/>
        <StackLayout class="p-20" v-if="this.distance > 0">
            <FlexboxLayout flexDirection="row" justifyContent="left" v-for="unit in units">
                <Label class="" textWrap=true :text="'Distance in '+unit.name+': '"/>
                <Label class="font-weight-bold" :text="convert(unit.convert[selectedUnitIndex])+' '+unit.short"/>
            </FlexboxLayout>
        </StackLayout>
      </StackLayout>
  `,
};
