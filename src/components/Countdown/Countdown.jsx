import "./Countdown.css";
import React, { Component } from "react";

// Animated Card Component
const AnimatedCard = ({ animation, digit }) => (
  <div className={`flipCard ${animation}`}>
    <span>{digit}</span>
  </div>
);

// Static Card Component
const StaticCard = ({ position, digit }) => (
  <div className={position}>
    <span>{digit}</span>
  </div>
);

// Flip Unit Container
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // Handle rollover for days, months, etc.
  if (unit === "days") {
    previousDigit = previousDigit === -1 ? 30 : previousDigit;
  } else if (unit === "months") {
    previousDigit = previousDigit === 0 ? 12 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  }

  // Pad single digit with a leading zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer rounded-[15px]"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

// FlipClock Component
class FlipClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: 0,
      monthsShuffle: true,
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Update Time Function
  updateTime() {
    const targetDate = new Date(2024, 11, 18, 13, 30, 0); // December 18, 2023, 1:30:00 PM
    // Target date (Dec 18, 2024, 10:00:00 AM)
    const currentDate = new Date(); // Current date

    // Calculate the total time difference in milliseconds
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      // If the countdown is over, reset all values to 0
      this.setState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(this.timerID);
      return;
    }

    // Breakdown the time difference
    let years = targetDate.getFullYear() - currentDate.getFullYear();
    let months = targetDate.getMonth() - currentDate.getMonth();
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const futureMonth = new Date(
      currentDate.getFullYear() + years,
      currentDate.getMonth() + months,
      1
    );
    const futureMonthStart = new Date(
      futureMonth.getFullYear(),
      futureMonth.getMonth(),
      1
    );
    const futureMonthEnd = new Date(
      futureMonth.getFullYear(),
      futureMonth.getMonth() + 1,
      1
    );

    const daysInFutureMonth =
      (futureMonthEnd - futureMonthStart) / (1000 * 60 * 60 * 24);
    let days = targetDate.getDate() - currentDate.getDate();
    if (days < 0) {
      days += daysInFutureMonth;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Update state with the new values and shuffle flags
    if (months !== this.state.months) {
      this.setState({ months, monthsShuffle: !this.state.monthsShuffle });
    }
    if (days !== this.state.days) {
      this.setState({ days, daysShuffle: !this.state.daysShuffle });
    }
    if (hours !== this.state.hours) {
      this.setState({ hours, hoursShuffle: !this.state.hoursShuffle });
    }
    if (minutes !== this.state.minutes) {
      this.setState({ minutes, minutesShuffle: !this.state.minutesShuffle });
    }
    if (seconds !== this.state.seconds) {
      this.setState({ seconds, secondsShuffle: !this.state.secondsShuffle });
    }
  }

  render() {
    const {
      months,
      days,
      hours,
      minutes,
      seconds,
      monthsShuffle,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <>
        <h5
          className="text-xl text-center flex items-center justify-center font-medium w-64 text-white tracking-wide mb-4
					lg:text-2xl lg:pb-8"
          id="countdown"
        ></h5>
        <div className={"flipClock"}>
          <FlipUnitContainer
            unit={"months"}
            digit={months}
            shuffle={monthsShuffle}
          />
          <FlipUnitContainer unit={"days"} digit={days} shuffle={daysShuffle} />
          <FlipUnitContainer
            unit={"hours"}
            digit={hours}
            shuffle={hoursShuffle}
          />
          <FlipUnitContainer
            unit={"minutes"}
            digit={minutes}
            shuffle={minutesShuffle}
          />
          <FlipUnitContainer
            unit={"seconds"}
            digit={seconds}
            shuffle={secondsShuffle}
          />
        </div>
        <div
          className="grid grid-rows-1 grid-cols-5 gap-1 text-xs text-white w-full md:w-[764px] mt-3 text-center
					lg:text-base"
        >
          <div>Months</div>
          <div>Days</div>
          <div>Hrs</div>
          <div>Min</div>
          <div>Sec</div>
        </div>
      </>
    );
  }
}

export default FlipClock;
