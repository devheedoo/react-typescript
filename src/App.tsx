import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";

const NavigationsWrapper = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: baseline;
  margin-top: 24px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const NavigationTitle = styled.h2`
  color: #e0e0e0;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

const NavigationCurrentDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
`;

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AnimatePresence>
        <NavigationsWrapper style={{ color: "white" }}>
          <Navigation>
            <NavigationTitle onClick={() => navigate("/")}>
              popular
            </NavigationTitle>
            {pathname === "/" && (
              <NavigationCurrentDot layoutId="current-page-dot" />
            )}
          </Navigation>
          <Navigation>
            <NavigationTitle onClick={() => navigate("/coming-soon")}>
              coming soon
            </NavigationTitle>
            {pathname === "/coming-soon" && (
              <NavigationCurrentDot layoutId="current-page-dot" />
            )}
          </Navigation>
          <Navigation>
            <NavigationTitle onClick={() => navigate("/now-playing")}>
              now playing
            </NavigationTitle>
            {pathname === "/now-playing" && (
              <NavigationCurrentDot layoutId="current-page-dot" />
            )}
          </Navigation>
        </NavigationsWrapper>
      </AnimatePresence>

      <Outlet />
    </>
  );
};

export default App;
