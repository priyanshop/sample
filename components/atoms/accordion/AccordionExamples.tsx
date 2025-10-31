import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Accordion, AccordionItem } from "./Accordion";

export const AccordionExamples = () => {
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const basicData = [
    {
      title: "What is React Native?",
      content:
        "React Native is a framework for building native mobile applications using React and JavaScript.",
    },
    {
      title: "What is Expo?",
      content:
        "Expo is a framework and platform for universal React applications. It provides tools and services for React Native development.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    },
  ];

  const componentData = [
    {
      title: "Custom Component Content",
      children: (
        <View style={styles.customContent}>
          <Text style={styles.customTitle}>This is a custom component!</Text>
          <Text style={styles.customText}>
            You can put any React component here, including buttons, images,
            forms, etc.
          </Text>
        </View>
      ),
    },
    {
      title: "Another Component",
      children: (
        <View style={styles.customContent}>
          <Text style={styles.highlight}>🎉 Rich content support</Text>
          <Text>• Lists</Text>
          <Text>• Images</Text>
          <Text>• Interactive elements</Text>
        </View>
      ),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Basic Accordion</Text>
        <Accordion data={basicData} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Allow Multiple Open</Text>
        <Accordion data={basicData} allowMultiple />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Custom Styling</Text>
        <Accordion
          data={basicData}
          itemContainerStyle={{
            marginBottom: 20,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#007AFF",
          }}
          headerStyle={{
            backgroundColor: "#007AFF",
            padding: 20,
          }}
          headerTextStyle={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "bold",
          }}
          contentStyle={{
            backgroundColor: "#F0F8FF",
            padding: 20,
          }}
          contentTextStyle={{
            fontSize: 16,
            color: "#333",
            lineHeight: 24,
          }}
          iconColor="#FFFFFF"
          iconSize={28}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Custom Ionicons</Text>
        <Accordion
          data={basicData}
          openIcon="remove-circle-outline"
          closeIcon="add-circle-outline"
          iconColor="#FF3B30"
          iconSize={28}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Custom Icon Component</Text>
        <Accordion
          data={basicData}
          customIcon={(isOpen) => (
            <MaterialCommunityIcons
              name={isOpen ? "chevron-up-circle" : "chevron-down-circle"}
              size={28}
              color="#34C759"
            />
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Different Custom Icons</Text>
        <View>
          <AccordionItem
            title="With Material Community Icon"
            content="This item uses Material Community Icons"
            customIcon={(isOpen) => (
              <MaterialCommunityIcons
                name={isOpen ? "folder-open" : "folder"}
                size={24}
                color="#FF9500"
              />
            )}
          />
          <AccordionItem
            title="With FontAwesome Icon"
            content="This item uses FontAwesome icons"
            customIcon={(isOpen) => (
              <FontAwesome
                name={isOpen ? "star" : "star-o"}
                size={24}
                color="#FFD700"
              />
            )}
          />
          <AccordionItem
            title="With Plus/Minus"
            content="This item uses plus and minus icons"
            customIcon={(isOpen) => (
              <MaterialCommunityIcons
                name={isOpen ? "minus-box" : "plus-box"}
                size={24}
                color="#007AFF"
              />
            )}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>7. Component Content</Text>
        <Accordion data={componentData} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>8. Standalone AccordionItem</Text>
        <AccordionItem
          title="Controlled Accordion Item"
          content="This is a standalone accordion item with controlled state"
          isOpen={isCustomOpen}
          onToggle={(newState) => setIsCustomOpen(newState)}
          itemContainerStyle={{ borderWidth: 2, borderColor: "#FF3B30" }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>9. Default Open</Text>
        <AccordionItem
          title="This item starts open"
          content="This accordion item is open by default using defaultOpen prop"
          defaultOpen
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>10. Custom Title Component</Text>
        <AccordionItem
          title={
            <View style={styles.customTitleContainer}>
              <MaterialCommunityIcons
                name="help-circle"
                size={24}
                color="#007AFF"
              />
              <Text style={styles.customTitleText}>Custom Title with Icon</Text>
            </View>
          }
          content="You can pass custom React components as titles too!"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>11. Disabled Item</Text>
        <AccordionItem
          title="Disabled Accordion"
          content="This item is disabled and cannot be opened"
          disabled
          itemContainerStyle={{ opacity: 0.5 }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>12. Animation Presets</Text>
        <AccordionItem
          title="Spring Animation"
          content="This uses spring animation preset"
          animationPreset="spring"
          defaultOpen
        />
        <AccordionItem
          title="Linear Animation"
          content="This uses linear animation preset"
          animationPreset="linear"
        />
        <AccordionItem
          title="No Animation"
          content="This has animations disabled"
          animationEnabled={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>13. Manual Composition</Text>
        <Accordion>
          <AccordionItem title="Manual Item 1">
            <Text>Custom content for item 1</Text>
          </AccordionItem>
          <AccordionItem title="Manual Item 2" defaultOpen>
            <Text>Custom content for item 2 (default open)</Text>
          </AccordionItem>
          <AccordionItem
            title="Manual Item 3"
            customIcon={(isOpen) => (
              <MaterialCommunityIcons
                name={isOpen ? "arrow-up-bold" : "arrow-down-bold"}
                size={24}
                color="#FF3B30"
              />
            )}
          >
            <Text>Custom content with custom icon</Text>
          </AccordionItem>
        </Accordion>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  customContent: {
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#007AFF",
  },
  customText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  highlight: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF3B30",
    marginBottom: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  customTitleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});


