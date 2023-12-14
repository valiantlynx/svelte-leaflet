import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
   
  } from '@mantine/core';
  
  const useStyles = createStyles((theme) => ({
    comment: {
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    },
  
    body: {
      // paddingLeft: rem(54),

      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  
    content: {
      '& > p:last-child': {
        marginBottom: 0,
      },
    },
  }));
  
 
  export function CommentHtml(props) {
    const { classes } = useStyles();

    const comment = {
        postedAt: props.createdAt,
        body: props.message,
        author: {
          name: props.name,
          image: props.avatar
        }
      }
  
      
    return (
      <Paper withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar src={comment.author.image} alt={comment.author.name} radius="xl" />
          <div>
            <Text fz="sm">{comment.author.name}</Text>
            <Text fz="xs" c="dimmed">
              {comment.postedAt}
            </Text>
          </div>
        </Group>
       

        <TypographyStylesProvider className={classes.body}>
          <div className={classes.content} dangerouslySetInnerHTML={{ __html: comment.body }} />
        </TypographyStylesProvider>
      
      </Paper>
    );
  }