import React from 'react';
import Button from './index';

export default (
  <div style={{ padding: '20px' }}>
    <p><Button>Load more</Button></p>
    <p><Button disabled>I am disabled</Button></p>
    <p><Button shadow>I have a shadow</Button></p>
    <p>
      <Button shadow icon={{ icon: 'facebook', size: '28px' }}>
        I have an icon
      </Button>
    </p>
    <p>
      <Button unstyled icon={{ icon: 'facebook', size: '28px' }}>
        Unstyled with icon
      </Button>
    </p>
    <p>
      <Button icon={{ icon: 'facebook', size: '56px', rounded: true }}>
        I have an bigger icon
      </Button>
    </p>
  </div>
);
