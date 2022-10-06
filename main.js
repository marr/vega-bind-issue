import './style.css';

const spec = {
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets/data/seattle-weather.csv",
  },
  padding: 15,
  width: 400,
  height: 400,
  transform: [
    { calculate: "datum.temp_max - datum.temp_min", as: "temp_range" },
  ],
  config: {
    background: 'transparent',
    style: {
      area: {
        color: "#45010aab"
      },
    },
    view: {
      fill: '#fff'
    }
  },
  mark: 'area',
  encoding: {
    x: {
      timeUnit: "month",
      field: "date",
    },
    y: {
      aggregate: "mean",
      field: "temp_range",
    },
  },
  params: [
    {
      name: "brush",
      select: { type: "interval", encodings: ["x"] },
    },
  ],
  signals: [
    {
      name: "brush_x",
      bind: { element: '#date' },
    },
  ]
};

const { view } = await vegaEmbed("#app", spec, {
  actions: false,
});
