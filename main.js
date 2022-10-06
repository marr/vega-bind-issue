import './style.css';

const spec = {
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets/data/seattle-weather.csv",
  },
  transform: [
    { calculate: "datum.temp_max - datum.temp_min", as: "temp_range" },
  ],
  mark: "line",
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
  background: "transparent", // doesn't work
});

view.background("transparent").run();
