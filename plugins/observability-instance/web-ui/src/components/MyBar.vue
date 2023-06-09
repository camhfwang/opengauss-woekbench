<script setup lang="ts">
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption, TooltipComponent, TooltipComponentOption, LegendComponent, TitleComponent, ToolboxComponent, VisualMapComponent } from "echarts/components";
import { BarSeriesOption, BarChart } from "echarts/charts";
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from "echarts/renderers";
import { useEventListener } from "@vueuse/core";
import { uuid } from "../shared";
import { YAXisOption } from "echarts/types/dist/shared";
import { OptionDataValue } from 'echarts/types/src/util/types'

export type LineData = {
        name: string,
        nameGap?: number,
        data: any[],
        unit?: string, // unit
        min?: number,
        max?: number,
        interval?: number,
        stack:string,
    }
type EchartsOption = echarts.ComposeOption<
    GridComponentOption | TooltipComponentOption | BarSeriesOption
>;
echarts.use([
    CanvasRenderer,
    UniversalTransition,
    GridComponent,
    TooltipComponent,
    ToolboxComponent,
    TitleComponent,
    BarChart,
    VisualMapComponent,
    LegendComponent
]);
const domId = uuid();
let myChart: echarts.ECharts
const props = withDefaults(defineProps<{
    // xAxis Data
    xData?: string[],
    yData?: string[],
    // yAxis Line Data
    data?: LineData[],
    maxData?:number,
    showNum?:boolean,
    title?:string,
    unit?: string,
    scatterUnit?: string,
    // yAxis Scatter Data
    // LineChart use areaStyle
    areaStyle?: boolean,
    // chart colors
    color?: string[],
    theme?: 'dark' | 'light',
}>(), {
    xData: () => [],
    yData: () => [],
    data: () => [],
    maxData: 10,
    unit: '',
    scatterUnit: '',
    areaStyle: false,
    color: () => ['#37D4D1', '#00C7F9', '#0D86E2', '#425ADD', '#E64A19', '#9CCC65', '#A97526', '#2830FF', '#8B00E1', '#0F866A'],
    theme: 'dark',
});
const renderChart = () => {
    let seriesData: Array<BarSeriesOption> = [];
    let yAxisData: Array<YAXisOption> = [];
    props.data.forEach(({ name, data, unit, interval, ...item }) => {
        let obj: BarSeriesOption = {
            type: 'bar',
            name,
            data,
            barWidth: 60,
            emphasis: {
                focus: 'series'
            },
            tooltip: {
                valueFormatter: function (value: OptionDataValue | OptionDataValue[]) {
                    return value + ` ${unit}`;
                }
            },
            ...item
        }
        seriesData.push(obj)
        yAxisData.push({
            type: 'value',
            // name,
            axisLabel: {
                formatter: `{value} ${unit}`,
                color: '#d4d4d4'
            },
            nameTextStyle: {
                color: '#d4d4d4'
            },
            splitLine: {
                lineStyle: {
                    color: '#888888'
                }
            },
        })
    })
    const chartDom = document.getElementById(domId);
    if (!myChart) {
        myChart = echarts.init(chartDom!);
    }

    const option: EchartsOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#D4D4D4'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#D4D4D4'
                }
            },
            data: props.xData,
        },
        yAxis: yAxisData,
        series: seriesData
    }
    myChart.setOption(option)
}
onMounted(() => {        
    renderChart();
})

watch(() => props.data, () => {
    nextTick(renderChart)
}, { deep: true })

useEventListener(window, "resize", () => {
    myChart?.resize();
});
</script>

<template>
    <div :id="domId" ref="loadRef" style="width: 100%; height: 100%;"></div>
</template>
