<template>
<div class="container">
    <div class="date-selset-container" @touchstart="handleStart" @touchend="handleEnd">
        <div class="row-year-txt">
            <span class="arrow" @click="cutMonth('prev')"><img src="@/assets/prev.png" alt=""></span>
            <span class="arrow year-swt" @click="cutYear('prev')"><img src="@/assets/dub_prev.png" alt=""></span>
            <span>{{currYear}}-{{currM}}</span>
            <span class="arrow year-swt" @click="cutYear('next')"><img src="@/assets/dub_next.png" alt=""></span>
            <span class="arrow" @click="cutMonth('next')"><img src="@/assets/next.png" alt=""></span>
        </div>
        <div class="row-item weeks">
            <div class="row-inner-date" v-for="(item, index) in weekTxt" :key="item">
                <span :class="[index == 0 || index == 6 ? 'weekend' : '']">{{item}}</span>
            </div>
        </div>
        <transition :name="slideAnimate" tag="div">
            <div class="dates-sec clear" :key="isShowing">
                <div class="row-item">
                    <div class="row-inner-date" v-for="(item, index) in dateList" :key="index" :class="{startendactive: item.isStartOrEnd, active: item.isSelected, notcurrmonth: !item.isCurrMonthDay, disabled: item.disabled}">
                        <span @click="handleSelect(item)">{{item.dateTxt}}</span>
                    </div>
                </div>
                <div class="curr-select-date">所选日期：{{isRangDate ? selectStart + ' ~ ' + selectEnd : (selectStart ? selectStart : '--')}}</div>
            </div>
        </transition>
        <div class="btn-sub" @click="dateSelected">
            确认
        </div>
    </div>
</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'choose_date',
    data() {
        return {
            isRangDate: false, //是否是日期范围选择
            isDisabledDate: true, //是否禁用日期 默认禁用当前日期之前的日期
            strKey: '', // 标识用于区分字段

            isShowing: false,
            slideAnimate: "",

            weekTxt: ['日', '一', '二', '三', '四', '五', '六'],
            nowDate: {
                year: dayjs().year(),
                month: dayjs().month(),
                date: dayjs().date()
            },
            currYear: '',
            currMonth: '',
            selectStart: '',
            selectEnd: '',
            dateList: [],

            slideX: 0,
            slideY: 0
        }
    },
    created() {
        let param = api.pageParam;
        this.isRangDate = !!param.isRangDate
        this.isDisabledDate = typeof param.isDisabledDate === 'boolean' ? param.isDisabledDate : true
        this.strKey = param.strKey
        this.selectStart = api.pageParam.start || ''
        this.selectEnd = api.pageParam.end || ''
        this.init()
    },
    computed: {
        currM () {
            return (typeof this.currMonth == 'number') ? this.$comm.superZero(this.currMonth + 1) : ''
        }
    },
    methods: {
        init () {
            this.currYear = this.nowDate.year
            this.currMonth = this.nowDate.month
            if (!this.isRangDate) { //如果不是日期范围选择 则设置默认选择为当天
                this.selectStart = this.nowDate.year + '-' + this.$comm.superZero(this.nowDate.month + 1) + '-' + this.$comm.superZero(this.nowDate.date)
            }
            this.getDateList()
        },
        getDateList () { //方法渲染日期列表
            let dayJs = dayjs().year(this.currYear).month(this.currMonth)
            let monthDayNum = dayJs.daysInMonth() //当前月总天数
            let firstDayWeekIndex = dayJs.date(1).day() //当前月第一天 星期 0为周末
            let lastDayWeekIndex = dayJs.date(monthDayNum).day() //当前月最后一天 星期 0为周末
            let prevMonthDayNum = dayJs.year(this.currMonth == 0 ? this.currYear - 1 : this.currYear).month(this.currMonth == 0 ? 11 : this.currMonth - 1).daysInMonth() //上一个月总天数
            let dayjsNowDate = dayjs().year(this.nowDate.year).month(this.nowDate.month).date(this.nowDate.date)
            this.dateList = [] // 首先清空之前列表
            for (let i = 1; i < monthDayNum + 1; i++) { //生成当前月份日期对象
                let currDayJs = dayJs.date(i)
                let obj = {
                    // 日期显示文字 type String
                    dateTxt: this.$comm.superZero(i),
                    // 是否为选中状态
                    isSelected: (this.selectStart && this.selectEnd) ?
                        (currDayJs.isAfter(dayjs(this.selectStart), 'date') && currDayJs.isBefore(dayjs(this.selectEnd), 'date')) : false,
                    // 范围选择时是否是起始或者结束日期
                    isStartOrEnd: (this.selectStart ? currDayJs.isSame(dayjs(this.selectStart), 'date') : false) ||
                        (this.selectEnd ? currDayJs.isSame(dayjs(this.selectEnd), 'date') : false),
                    // 是否是禁用日期
                    disabled: this.isDisabledDate ?
                        currDayJs.isBefore(dayjsNowDate, 'date') : false,
                    // 是否是当前月份的日期
                    isCurrMonthDay: true,
                    // 日期数字 type Number
                    date: i,
                    // 日期所在月份
                    month: this.currMonth,
                    // 日期所在年份
                    year: this.currYear
                }
                this.dateList.push(obj) //将生成对象添加进日期数组
            }
            for (let i = 0; i < firstDayWeekIndex; i++) { // 可能需要显示上一月的末尾日期对象
                let dayJsPrev = dayjs().year(this.currMonth == 0 ? this.currYear - 1 : this.currYear).month(this.currMonth == 0 ? 11 : this.currMonth - 1).date(prevMonthDayNum - i)
                let obj = {
                    dateTxt: prevMonthDayNum - i,
                    isSelected: (this.selectStart && this.selectEnd) ?
                        (dayJsPrev.isAfter(dayjs(this.selectStart), 'date') && dayJsPrev.isBefore(dayjs(this.selectEnd), 'date')) : false,
                    isStartOrEnd: (this.selectStart ? dayJsPrev.isSame(dayjs(this.selectStart), 'date') : false) ||
                        (this.selectEnd ? dayJsPrev.isSame(dayjs(this.selectEnd), 'date') : false),
                    disabled: this.isDisabledDate ?
                        dayJsPrev.isBefore(dayjsNowDate, 'date') : false,
                    isCurrMonthDay: false,
                    date: prevMonthDayNum - i,
                    month: dayJsPrev.month(),
                    year: dayJsPrev.year()
                }
                this.dateList.unshift(obj)
            }
            for (let i = 1; i < 7 - lastDayWeekIndex; i++) { //可能需要显示的下一月的开头日期对象
                let dayJsNext = dayjs().year(this.currMonth == 11 ? this.currYear + 1 : this.currYear).month(this.currMonth == 11 ? 0 : this.currMonth + 1).date(i)
                let obj = {
                    dateTxt: this.$comm.superZero(i),
                    isSelected: (this.selectStart && this.selectEnd) ?
                        (dayJsNext.isAfter(dayjs(this.selectStart), 'date') && dayJsNext.isBefore(dayjs(this.selectEnd), 'date')) : false,
                    isStartOrEnd: (this.selectStart ? dayJsNext.isSame(dayjs(this.selectStart), 'date') : false) ||
                        (this.selectEnd ? dayJsNext.isSame(dayjs(this.selectEnd), 'date') : false),
                    disabled: this.isDisabledDate ?
                        dayJsNext.isBefore(dayjsNowDate, 'date') : false,
                    isCurrMonthDay: false,
                    date: i,
                    month: dayJsNext.month(),
                    year: dayJsNext.year()
                }
                this.dateList.push(obj)
            }
        },
        // 月份切换
        cutMonth (type) {
            if (type == 'prev') {
                this.currYear = (this.currMonth == 0) ? this.currYear - 1 : this.currYear
                this.currMonth = (this.currMonth == 0) ? 11 : this.currMonth - 1
            } else {
                this.currYear = (this.currMonth == 11) ? this.currYear + 1 : this.currYear
                this.currMonth = (this.currMonth == 11) ? 0 : this.currMonth + 1

            };
            this.isShowing = !this.isShowing
            this.slideAnimate = type == 'prev' ? 'slideright' : 'slideleft'
            this.getDateList()
        },
        // 年份切换
        cutYear (type) {
            if (type == 'prev') {
                this.currYear--
            } else {
                this.currYear++
            }
            this.isShowing = !this.isShowing
            this.slideAnimate = type == 'prev' ? 'slideright' : 'slideleft'
            this.getDateList()
        },
        // 选择方法
        handleSelect (item) {
            let currDateStr = item.year + '-' + this.$comm.superZero(item.month + 1) + '-' + this.$comm.superZero(item.date)
            let dayJsNow = dayjs().year(this.nowDate.year).month(this.nowDate.month).date(this.nowDate.date)
            if (this.isDisabledDate && item.disabled && dayjs(currDateStr).isBefore(dayJsNow, 'date')) return //点击 disabled 的情况
            if (!this.isRangDate) { //非日期范围选择
                if (this.selectStart != currDateStr) {
                    this.selectStart = currDateStr
                    this.getDateList()
                }
                return
            }
            if (!this.selectStart && !this.selectEnd) {
                this.selectStart = currDateStr
            } else {
                if (this.selectStart && this.selectStart == currDateStr) { //所选日期为起始选择日期则清除所有选择
                    this.selectEnd = ''
                    this.selectStart = ''
                };
                if (this.selectEnd && this.selectEnd == currDateStr) { //所选日期为之前选择的结束日期则清除之前的结束日期保留起始日期从而重新选择结束日期
                    this.selectEnd = ''
                    this.getDateList()
                    return
                }
                // 起始、结束日期均存在并且不等于所选日期的情况
                if (this.selectStart && this.selectEnd && this.selectStart != currDateStr && this.selectEnd != currDateStr) {
                    if (dayjs(currDateStr).isBefore(this.selectStart, 'date')) { //当所选日期小于起始日期时重新设置起始日期否则调整结束日期
                        this.selectStart = currDateStr
                        this.selectEnd = ''
                    } else {
                        this.selectEnd = currDateStr
                    }
                }
                // 起始日期存在并且不等于当前选择日期并且没有结束日期时
                if (this.selectStart && this.selectStart != currDateStr && !this.selectEnd) {
                    if (dayjs(currDateStr).isBefore(this.selectStart, 'date')) { //如果所选日期小于起始日期则重新设置起始日期否则设置结束日期
                        this.selectStart = currDateStr
                    } else {
                        this.selectEnd = currDateStr
                    }
                }
            }
            this.getDateList()
        },
        handleStart (e) {
            this.slideX = e.touches[0].clientX
            this.slideY = e.touches[0].clientY
        },
        handleEnd (e) {
            let endX = e.changedTouches[0].clientX
            let endY = e.changedTouches[0].clientY
            if (Math.abs(endY - this.slideY) < 30) {
                if (endX - this.slideX > 10) {
                    this.cutMonth('prev')
                };
                if (endX - this.slideX < -10) {
                    this.cutMonth('next')
                }
            }
            this.slideX = 0
            this.slideY = 0
        },
        dateSelected () {
            if (!this.isRangDate && !this.selectStart) {
                this.toast({
                    msg: '请选择日期',
                    duration: 2000
                })
                return
            }
            if (this.isRangDate) {
                if (!this.selectStart) {
                    this.toast({
                        msg: '请选择起始日期',
                        duration: 2000
                    })
                    return
                };
                if (!this.selectEnd) {
                    this.toast({
                        msg: '请选择结束日期',
                        duration: 2000
                    })
                    return
                }
            }
            api.sendEvent({
                name: 'dateselect',
                extra: {
                    strKey: this.strKey,
                    start: this.selectStart,
                    end: this.selectEnd
                }
            })
            api.closeWin()
        }
    }
}
</script>

<style lang="scss">
.container {
    background: #fff;
}

.date-selset-container {
    position: relative;
    width: 100%;
    height: 100vh;
}

.dates-sec {
    position: absolute;
    left: 0;
    top: 2.06rem;
    width: 100%;
}

.date-selset-container .row-year-txt {
    height: 1rem;
    background: #f9f9f9;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    justify-content: space-between;
}

.date-selset-container .row-year-txt .arrow {
    display: block;
    width: 1rem;
    height: 100%;
    position: relative;
}

.date-selset-container .row-year-txt .arrow:active {
    background: rgba(0, 0, 0, .05)
}

.date-selset-container .row-year-txt .arrow img {
    width: .12rem;
    height: .25rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

.date-selset-container .row-year-txt .arrow.year-swt img {
    width: .24rem;
}

.date-selset-container .row-item {
    display: flex;
    display: -webkit-flex;
    flex-flow: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
}

.row-inner-date {
    width: 14.2857%;
    text-align: center;
    font-size: .31rem;
    line-height: .96rem;
    vertical-align: top;
    padding: .1rem 0;
    box-sizing: border-box;
    height: 100%;
}

.row-inner-date span {
    display: inline-block;
    height: 100%;
    width: 100%;
}

.weeks {
    padding-bottom: 0;
}

.weeks .row-inner-date span {
    padding: 0;
    font-size: .36rem;
}

.notcurrmonth span {
    color: #aaa;
}

.active span {
    background: #e0e5df;
}

.startendactive span {
    background: #b7c1b6;
    color: #fff;
}

.disabled span {
    background: #e8e8e8;
    opacity: .4;
}

.weekend {
    color: #985157;
}

/*/过渡 css */

.slideleft-enter-active {
    animation: slideLeftEnter .3s;
}

.slideleft-leave-active {
    animation: slideLeftLeave .3s;
}

@keyframes slideLeftEnter {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideLeftLeave {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

.slideright-enter-active {
    animation: slideRightEnter .3s;
}

.slideright-leave-active {
    animation: slideRightLeave .3s;
}

@keyframes slideRightEnter {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideRightLeave {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}

.btn-sub {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid #b7c1b6;
    color: #fff;
    background: #b7c1b6;
    text-align: center;
    line-height: .98rem;
    font-size: .3rem;
    margin: 0 auto;
}

.btn-sub:active {
    opacity: .8rem;
}

.curr-select-date {
    line-height: .8rem;
    background: #f9f9f9;
    font-size: .24rem;
    padding: 0 .3rem;
    color: #959595;
}
</style>
