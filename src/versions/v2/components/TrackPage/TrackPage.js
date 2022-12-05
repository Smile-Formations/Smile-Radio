import { useNavigate, useParams } from 'react-router-dom';

import { useTrack } from '../../hooks/useTrack/useTrack';
import { addTrack, updateTrack } from '../../services/track/track';

import TrackForm from '../TrackForm/TrackForm';
import Container from '../Container/Container';
import Title from '../Title/Title';

function TrackPage(props) {

  const { categories } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [track, setTrack] = useTrack(id);

  const title = id
    ? `Edit track (${id})`
    : 'Add new track';

  return (
    <div>
      <Title linkProps={{children: 'Back', to: '/'}} title={title}/>
      <Container>
        <TrackForm
          track={track}
          categories={categories}
          onTrackChange={handleTrackChange}
          onSubmit={handleSubmit}
        />
      </Container>
    </div>
  );

  function handleTrackChange(name, value) {
    setTrack(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit() {
    if (id) {
      updateTrack(track);
    } else {
      addTrack(track).then(track => navigate(`/track/${track.id}`));
    }
  }
}

TrackPage.defaultProps = {
  categories: []
};

export default TrackPage;
