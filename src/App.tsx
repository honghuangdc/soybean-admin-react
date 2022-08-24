import { useState, Suspense } from 'react';
import type { FC } from 'react';
import {
  ColorSchemeProvider,
  MantineProvider,
  Text,
  Button,
  Switch,
  Stack,
  Group,
  Checkbox,
  Input,
  Radio,
  Slider,
  useMantineColorScheme
} from '@mantine/core';
import type { ColorScheme } from '@mantine/core';
import { AppLoading } from '@/components';

const App: FC = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE;

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Suspense fallback={<AppLoading title={appTitle} />}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Stack className="h-full" align="center">
            <Text
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              size={32}
              weight={700}
            >
              SoybeanAdminReact
            </Text>
            <ColorModeSwitcher />
            <Group position="center">
              <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                Indigo cyan
              </Button>
              <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                Lime green
              </Button>
              <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                Teal blue
              </Button>
              <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                Orange red
              </Button>
              <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Peach
              </Button>
            </Group>
            <Checkbox label="Default checkbox" />
            <Input placeholder="Input" />
            <Radio.Group label="Select your favorite framework/library" description="This is anonymous" withAsterisk>
              <Radio value="react" label="React" />
              <Radio value="svelte" label="Svelte" />
              <Radio value="ng" label="Angular" />
              <Radio value="vue" label="Vue" />
            </Radio.Group>
            <Slider
              marks={[
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' }
              ]}
              className="w-400px"
            />
          </Stack>
        </MantineProvider>
      </ColorSchemeProvider>
    </Suspense>
  );
};

function ColorModeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button variant="outline" onClick={() => toggleColorScheme()}>
        Toggle {colorScheme === 'light' ? 'dark' : 'light'}
      </Button>
      <Switch checked={colorScheme === 'light'} onChange={() => toggleColorScheme()}></Switch>
    </Group>
  );
}

export default App;
