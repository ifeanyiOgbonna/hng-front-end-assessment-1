import './App.css';

function App() {
  return (
    <main>
        <div className="container">
            <img src="/img/_Avatar.png" className="mobile_avatar" alt="avatar" />
            <img src="/img/_Avatar share button.png" className="desktop_avatar" alt="" />
            <img alt="profile" src="img/profile.png" className="profile__img" id="profile__img" />
            <p id="slack">Ifeanyi Ogbonna</p>

            <a href="https://twitter.com/IfeanyiIfybest" className="btn" id="twitter">Twitter Links</a>

            <a href="https://training.zuri.team/" className="btn" id="‘btn__zuri’">Zuri team</a>

            <a href=" http://books.zuri.team " className="btn" id="Books">Zuri Books</a>

            <a href="https://books.zuri.team/python-for-beginners?ref_id=Ifeanyi Ogbonna" className=" btn" id="‘book__python’">Python Books</a>

            <a href="https://background.zuri.team," className="btn" id="‘pitch">Background check for coder</a>

            <a href="https://books.zuri.team/design-rules" className="btn" id="‘book__design’">Design Books</a>


            <div className="media-links">
                <a href="#">
                    <img src="/img/slack.svg" alt="slack" id="slack" />
                </a>
                <a href="#">
                    <img src="/img/Icon.png" alt="github" />
                </a>
            </div>
        </div>
        <hr class="north" />
        <footer className="footer">
            <a href="#">
                <img src="/img/Vector.png" alt="vector" />
            </a>
            <a href="#">
                <img src="/img/Footer text.png" alt="vector" />
            </a>
            <a href="#">
                <img src="/img/links-img.png" alt="vector" />
            </a>
        </footer>
    </main>
  );
}

export default App;