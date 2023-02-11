const value = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    const mondayHoursInput = document.getElementById("monday-hours").value;
    const  mondayMinuteInput=document.getElementById("monday-minute").value;
    const mondayEndingHoursInput = document.getElementById("monday-ending-hours" ).value;
    const mondayEndingMinuteInput = document.getElementById("monday-ending-minute" ).value;
    const breakHoursInput = document.getElementById("monday-break-hours").value;
    const breakMinuteInput = document.getElementById("monday-break-minute").value;

    console.log(
      mondayHoursInput,
      mondayMinuteInput,
      mondayEndingHoursInput,
      mondayEndingMinuteInput,
      breakHoursInput,
      breakMinuteInput
    );
  });
