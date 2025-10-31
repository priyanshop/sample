import WebView from 'react-native-webview';

export function SDKView({ uri }: { uri: string }): React.ReactElement {
   return <WebView source={{ uri }} style={{ flex: 1 }} />;
}
