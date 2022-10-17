const ad =
  `<a href="https://tiiny.host?ref=free-site">
    <div style="color: white; display: flex; align-items: center; padding: 10px">
      <img height=75 src="https://tiiny.host/ad.png" alt="tiiny.host">
    </div>
  </a>`;

window.onload = function() {
  const elemDiv = document.createElement('div');
  elemDiv.innerHTML = ad;
  elemDiv.style.cssText = `position:fixed;bottom:85px;width:210px;height:65px;z-index:9999`;
  document.body.insertBefore(elemDiv, document.body.firstChild);
};
