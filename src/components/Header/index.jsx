import { Container } from "../../styles/global";
import { MyHeader } from "./styled"

const Header = (props) => {
  const { onTheme } = props;
  const { theme, setTheme } = onTheme;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <MyHeader>
      <Container>
        <nav>
          <div className="logo">LOGO</div>
          <div className="menu">
            <label htmlFor="dark" className="switch">
              <input
                type="checkbox"
                id="dark"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </nav>
      </Container>
    </MyHeader>
  )
}

export default Header;
