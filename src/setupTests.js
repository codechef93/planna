import './localisations';
import 'jest-canvas-mock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => ({
    navigate: jest.fn()
  }),
  useLocation: () => ({
    location: {}
  })
}));
