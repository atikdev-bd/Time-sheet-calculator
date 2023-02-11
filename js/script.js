
 





// const getAmPmValue = (id) => {
//   console.log(id);
//   // const getAmPm = document.getElementById("id");
//   // console.log(getAmPm);
//   // const AmPmValue = getAmPm.options[getAmPm.selectedIndex].value;
//   // console.log(AmPmValue);
//   // return AmPmValue;
// }

///------monday calculation start here------/////
const value = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    const mondayHoursInput = document.getElementById("monday-hours").value;
    const mondayHoursInputFloat = parseFloat(mondayHoursInput);
    const mondayMinuteInput = document.getElementById("monday-minute").value;
    const mondayMinuteInputFloat = parseFloat(mondayMinuteInput);
    const mondayEndingHoursInput = document.getElementById(
      "monday-ending-hours"
    ).value;
    const mondayEndingHoursInputFloat = parseFloat(mondayEndingHoursInput);
    const mondayEndingMinuteInput = document.getElementById(
      "monday-ending-minute"
    ).value;
    const mondayEndingMinuteInputFloat = parseFloat(mondayEndingMinuteInput);
    const breakHoursInputFloat = parseFloat(
      document.getElementById("monday-break-hours").value
    );
    const breakMinuteInputFloat = parseFloat(
      document.getElementById("monday-break-minute").value
    );

    const starting = document.getElementById("monday-starting-am-pm").value;
    console.log(starting);
    const ending = document.getElementById("monday-ending-am-pm").value;
    console.log(ending);

    if (starting === "PM") {
      const mondayTotalWork = parseFloat(
        mondayHoursInputFloat + 12 - mondayEndingHoursInputFloat
      );
      console.log(mondayTotalWork);
      
    }

    if(starting === "AM" && ending === "AM"){
      const mondayTotalWork =
        mondayEndingHoursInputFloat + 24 - mondayHoursInputFloat 
        console.log(mondayTotalWork);
    }

    if (starting === 'PM' && ending === 'PM') {
      const mondayTotalWork = mondayEndingHoursInputFloat - mondayHoursInput

      console.log(mondayTotalWork);
    }

    //   const mondayTotal = document.getElementById("monday-total");

    //   const mondayTotalstring = mondayTotal.innerText

    //   const folt = parseFloat(mondayTotalstring)

    // console.log(folt);

    // const mondayNewTotal = parseFloat(mondayTotalWork + folt);

    //   console.log(mondayNewTotal);

    //    mondayTotal.innerText = mondayNewTotal;
    //   console.log(mondayTotal);

    // const totalMondayWorkHours = mondayHoursInputFloat - mondayEndingHoursInputFloat;

    // console.log(mondayTotal);
    // mondayTotal.innerText = totalMondayWorkHours;

    console.log(
      mondayHoursInputFloat,
      mondayMinuteInputFloat,
      mondayEndingHoursInputFloat,
      mondayEndingMinuteInputFloat,
      breakHoursInputFloat,
      breakMinuteInputFloat
    );
  });
