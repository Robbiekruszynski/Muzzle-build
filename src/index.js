import './sass/styles.scss';
// import Icon from './icon.png';

var countDownDate = new Date("Aug 2, 2019 13:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById("days").innerHTML = "<p>" + days + "d </p>";
  document.getElementById("hours").innerHTML = "<p>" + hours + "h </p>";
  document.getElementById("minutes").innerHTML = "<p>" + minutes + "m </p>";
  document.getElementById("seconds").innerHTML = "<p>" + seconds + "s </p>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "<p>Now Available</p>";
  }
}, 1000);
