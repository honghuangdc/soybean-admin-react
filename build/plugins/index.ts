import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import html from './html';
import unocss from './unocss';

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [html(viteEnv), react(), unocss];

  return plugins;
}
