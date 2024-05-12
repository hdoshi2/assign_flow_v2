import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import SearchNotFound from 'src/components/search-not-found';

import { IChatParticipant } from 'src/types/chat';

// ----------------------------------------------------------------------

type Props = {
  query: string;
  results: IChatParticipant[];
  onClickResult: (contact: IChatParticipant) => void;
};

export function ChatNavSearchResults({ query, results, onClickResult }: Props) {
  const totalResults = results.length;

  const notFound = !totalResults && !!query;

  const renderNotFound = (
    <SearchNotFound
      query={query}
      sx={{
        p: 3,
        mx: 'auto',
        width: `calc(100% - 40px)`,
        bgcolor: 'background.neutral',
      }}
    />
  );

  const renderResults = (
    <nav>
      <List disablePadding>
        {results.map((result) => (
          <ListItem disablePadding key={result.id}>
            <ListItemButton
              onClick={() => onClickResult(result)}
              sx={{
                py: 1.5,
                px: 2.5,
                gap: 2,
                typography: 'subtitle2',
              }}
            >
              <Avatar alt={result.name} src={result.avatarUrl} />
              {result.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          px: 2.5,
          mb: 2,
        }}
      >
        Contacts ({totalResults})
      </Typography>

      {notFound ? renderNotFound : renderResults}
    </>
  );
}
