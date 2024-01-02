export function Skills() {
  return (
    <section class="bottom">
      <div class="skills">
        <div className="section-title" id="skills">
          <h5>Skills</h5>
        </div>
        <div className="container">
          <ul id="cards">
            <li className="card" id="card1">
              <div className="card-body">
                <i class="fa-solid fa-palette"></i>
                <p class="skill-title">Design</p>
                <div class="web">Web Design</div>
                <div class="mobile">Mobile Design</div>
                <div class="ux">UX / UI</div>
                <div>Figma</div>
              </div>
            </li>
            <li className="card" id="card2">
              <div class="card-body">
                <i class="fa-solid fa-code"></i>
                <p class="skill-title">Development</p>
                <div class="dev-left">Java Script</div>
                <div class="dev-right">HTML CSS</div>
                <div>React</div>
                <div>PHP</div>
                <div>Java</div>
              </div>
            </li>
            <li className="card" id="card3">
              <div class="card-body">
                <i class="fa-solid fa-language"></i>
                <p class="skill-title">Languages</p>

                <div class="lang">French C2</div>

                <div class="lang">English C1</div>

                <div class="lang">Spanish B2</div>

                <div class="lang">Romanian C2</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
