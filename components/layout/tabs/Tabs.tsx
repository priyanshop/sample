import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { TabBar, TabBarProps, TabView } from 'react-native-tab-view';
import { styles } from './TabsStyle';

interface Tab {
   key: string;
   title: string;
   component: () => React.ReactElement | null;
}

export function Tabs({ tabs }: { tabs: Tab[] }): React.ReactElement {
   const { colors } = useSiliconUIContext();
   const [tabIndex, setTabIndex] = React.useState(0);
   const setIndex = (i: number) => setTabIndex(i);

   return (
      <TabView
         navigationState={{ index: tabIndex, routes: tabs }}
         renderScene={({ route }: { route: Tab }) => (
            <View style={styles.sceneContainer}>{route.component()}</View>
         )}
         onIndexChange={setIndex}
         renderTabBar={(props: TabBarProps<Tab>) => (
            <TabBar
               {...props}
               style={styles.tabBar}
               tabStyle={styles.tab}
               indicatorStyle={[styles.activeIndicator, { backgroundColor: colors.common.black.main }]}
               activeColor={colors.common.black.main}
               inactiveColor={colors.common.grey.main}
               pressColor="transparent"
            />
         )}
      />
   );
}
