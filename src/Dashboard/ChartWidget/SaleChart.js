import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";

Chart.register(...registerables);

export default function SaleChart(props) {
  const { t } = useTranslation();
  const { data } = props;
  const theme = useTheme();
  if (props.timeSpan === "today" || props.timeSpan === "current-week") {
    data.datasets[0].backgroundColor = [...(Array(data.datasets[0].data.length - 1).fill(theme.palette.chartPrimary.main)), theme.palette.chartCurrent.main]
  } else {
    data.datasets[0].backgroundColor = theme.palette.chartPrimary.main;
  }
  data.datasets[0].borderColor = theme.palette.chartBorderPrimary.main;

  if (data.datasets.length === 2) {
    data.datasets[1].backgroundColor = theme.palette.chartSecondary.main;
    data.datasets[1].borderColor = theme.palette.chartBorderSecondary.main;
  }
  let options = {
    plugins: {
      legend: {
        display: data.datasets.length === 2
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.text.disabled
        }
      },
      x: {
        grid: {
          color: theme.palette.text.disabled
        }
      }
    }
  };

  return props.type === "bar" ? (
    <Bar data={{ ...data, datasets: data.datasets.map((d) => {return {...d, label: t(d.label)};}) }} options={options} />
  ) : (
    <Line data={{ ...data, datasets: data.datasets.map((d) => {return {...d, label: t(d.label)};}) }} options={options} />
  );
}
