import { useEffect, useState } from 'react';

import { getTrack } from '../../services/track/track';

export function useTrack(trackId) {
  const [track, setTrack] = useState({
    category: 0,
    content: '',
    published: false,
    title: ''
  });

  useEffect(() => {
    if (trackId) {
      getTrack(trackId).then(setTrack);
    }
  }, [trackId]);

  return [track, setTrack];
}