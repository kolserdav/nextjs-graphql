import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { NextComponentType } from 'next';
import AppBar from '../src/components/AppBar';
import { store, action } from '../src/store';
import * as lib from '../services';
import Theme from '../src/components/Theme';
import * as Types from '../next-env';
import { Values } from '../node/schemas';
import { StaticContext, StaticProps, Props } from '../next-env';

export const getStaticProps = ({ locale }: StaticContext): StaticProps => {
  const lang = lib.getLang(locale);
  return {
    props: {
      t: lang,
    },
  };
};

const Home: NextComponentType<any, any, Props> = (props): React.ReactElement => {
  const { t } = props;
  const [name, setName] = useState<string>('');
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  });
  return (
    <Theme>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{name}</h1>
      <AppBar t={t} load={load} />
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem in mi tincidunt scelerisque. Integer venenatis in mauris et laoreet. Pellentesque a elit sit amet arcu varius pharetra id id ligula. Nullam vitae enim sit amet est feugiat aliquam ut eu arcu. Integer bibendum ex sit amet est sollicitudin, dignissim maximus leo feugiat. Etiam pharetra pellentesque magna, vestibulum condimentum dolor porttitor ut. Phasellus in consectetur odio. Quisque eleifend urna vel nisl sollicitudin tempor. Praesent tempus purus at mi ultricies, ac facilisis neque accumsan. Aliquam ornare tincidunt lorem, placerat egestas ante tristique lobortis. Quisque condimentum, libero non lacinia ultricies, justo lectus dignissim magna, quis elementum nisl augue posuere metus. Pellentesque efficitur mauris ac nisl venenatis suscipit.

Sed blandit rhoncus pulvinar. Proin sit amet tempus ipsum, lacinia tristique diam. Sed quis diam a quam egestas rhoncus. Aliquam eu blandit ipsum. Vestibulum at urna non ipsum consectetur rhoncus. Praesent justo neque, convallis id mi in, tristique molestie mauris. Vivamus ut eros quam. Etiam dapibus odio laoreet scelerisque venenatis. Quisque venenatis sodales semper. Praesent sagittis purus eu blandit venenatis. Proin sed felis et ligula feugiat pharetra. Nam eu nunc pharetra, fringilla libero id, accumsan sem.

Vivamus ac tempor tortor. Sed hendrerit suscipit bibendum. Donec finibus tincidunt ante vitae fringilla. In tempus suscipit felis. Aliquam rutrum turpis id urna dignissim vestibulum non in erat. Aliquam quis odio dolor. Duis molestie vitae nisi sed mollis. Suspendisse potenti. Nunc viverra nunc justo, ac sollicitudin ligula mollis sit amet. Suspendisse augue lacus, pretium ac nisl ac, porta tempor enim.

Fusce viverra accumsan tempus. In nec turpis tempor turpis laoreet semper nec vitae libero. Mauris mattis eros est. Etiam molestie neque et urna ultrices, molestie venenatis quam tempus. In non varius magna. Duis eu velit ut augue posuere dictum. Fusce at sem nec purus auctor accumsan. Curabitur hendrerit sem id est mattis commodo. Proin semper, elit et imperdiet pharetra, lectus nulla elementum ligula, quis mollis mauris ligula sit amet justo. Vestibulum sit amet libero dui. Proin rutrum, lorem eu egestas porttitor, ex massa consequat est, et rhoncus ipsum metus in elit. Vestibulum ultricies pellentesque sapien ac facilisis.

Ut tincidunt arcu id sem semper iaculis. Nullam vitae viverra elit, non mollis risus. Cras placerat commodo congue. Etiam at mattis libero. Duis ullamcorper, felis vitae lacinia dignissim, elit neque finibus tellus, nec placerat mi urna ut tellus. Donec scelerisque malesuada augue in finibus. Duis et laoreet est. Donec nec tortor ac arcu vehicula blandit in et eros. Sed gravida libero mollis, aliquam neque in, rutrum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in neque nec orci auctor ornare sit amet sit amet libero. Pellentesque posuere erat nulla. Integer non lacinia neque, in varius neque. Ut eu odio cursus, ornare erat vel, consequat enim.
</ Paragraph>
    </Theme>
  )
}

const Paragraph = styled.p`
  font-size: calc(14px + (220 - 14) * ((100vw - 320px) / (7680 - 320)));
`;


export default Home;
