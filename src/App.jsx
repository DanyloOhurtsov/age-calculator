import React, { useState } from "react";
import "./App.css";
import buttonArrow from "./img/buttonArrow.svg";

function App() {
  const [inputData, setInputData] = useState({
    day: '',
    month: '',
    year: '',
  });

  const [outputData, setOutputData] = useState({
    years: '--',
    months: '--',
    days: '--',
  });

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(
      inputData.year,
      inputData.month - 1,
      inputData.day
    );

    // Перевірка на коректність введених даних
    if (
      inputData.day <= 0 ||
      inputData.month <= 0 ||
      inputData.year <= 0 ||
      inputData.month > 12 ||
      inputData.day > 31
    ) {
      alert("Некоректні дані. Будь ласка, введіть правильні значення для дня, місяця та року.");
      return;
    }

    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    setOutputData({
      years,
      months,
      days,
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
  
    // Обмеження для введених значень
    switch (id) {
      case "day":
        setInputData({
          ...inputData,
          [id]: value > 31 ? 31 : value,
        });
        break;
      case "month":
        setInputData({
          ...inputData,
          [id]: value > 12 ? 12 : value,
        });
        break;
      case "year":
        setInputData({
          ...inputData,
          [id]: value > 9999 ? 9999 : value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="calculatorContent">
        <div className="inputArea">
          <div className="itemInput">
            <label className="titleItemInput" htmlFor="day">
              Day
            </label>
            <input
              className="inputItemInput"
              type="number"
              id="day"
              min="1"
              max="31"
              value={inputData.day}
              onChange={handleInputChange}
              onFocus={(e) => e.target.select()}
              placeholder="DD"
            />
          </div>
          <div className="itemInput">
            <label className="titleItemInput" htmlFor="month">
              Month
            </label>
            <input
              className="inputItemInput"
              type="number"
              id="month"
              min="1"
              max="12"
              value={inputData.month}
              onChange={handleInputChange}
              onFocus={(e) => e.target.select()}
              placeholder="MM"
            />
          </div>
          <div className="itemInput">
            <label className="titleItemInput" htmlFor="year">
              Year
            </label>
            <input
              className="inputItemInput"
              type="number"
              id="year"
              min="1"
              max="9999"
              value={inputData.year}
              onChange={handleInputChange}
              onFocus={(e) => e.target.select()}
              placeholder="YYYY"
            />
          </div>
        </div>
        <div className="buttonArea">
          <div className="line"></div>
          <button className="buttonCalculate" onClick={calculateAge}>
            <img src={buttonArrow} alt="" />
          </button>
        </div>
        <div className="outputArea">
          <div className="itemOutput">
            <p className="numberOutput">{outputData.years}</p>
            <p className="titleOutput">years</p>
          </div>
          <div className="itemOutput">
            <p className="numberOutput">{outputData.months}</p>
            <p className="titleOutput">months</p>
          </div>
          <div className="itemOutput">
            <p className="numberOutput">{outputData.days}</p>
            <p className="titleOutput">days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
