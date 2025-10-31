import {
  Accordion,
  AccordionExamples,
  AccordionItem,
  Button,
  Counter,
  Divider,
  FormSkeleton,
  IconButton,
  SDKView,
} from "@/components/atoms";
import {
  DateInput,
  NumericInput,
  Password,
  PaymentMethodRadioGroup,
  RadioGroup,
  SearchBar,
  SelectDropdown,
  Slider,
  SwitchInput,
} from "@/components/inputs";
import { FieldTypes } from "@/components/inputs/fieldTypes.type";
import { FormPicker } from "@/components/inputs/picker/Picker_";
import { Select } from "@/components/inputs/select/Select";
import { Input } from "@/components/inputs/text/Input";
import ParallaxScrollView from "@/components/preset/ParallaxScrollView";
import { Banner, ImageCarousel } from "@/components/widgets";
import { useSiliconUIContext } from "@/theme";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button as BN, Text } from "react-native-paper";
import { useToastContext } from "../../package/toast/hooks/useToastContext";

export default function HomeScreen() {
  const { colors } = useSiliconUIContext();
  const methods = useForm({
    defaultValues: {
      name: "",
      option: "",
    },
  });

  const [sliderValue, setSliderValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const CustomComponent = () => (
    <View style={{ padding: 12 }}>
      <Text>Custom content inside the accordion.</Text>
    </View>
  );
  const { showToast } = useToastContext();

  return (
    <FormProvider {...methods}>
      <ParallaxScrollView
        headerBackgroundColor={{
          light: colors.common.black.main,
          dark: colors.common.black.main,
        }}
        headerImage={<View />}
      >
        <>
          <BN
            onPress={() =>
              showToast({ message: "Saved successfully", severity: "success" })
            }
          >
            Success
          </BN>
          <BN
            onPress={() =>
              showToast({ message: "Error saving data", severity: "error" })
            }
          >
            Error
          </BN>
          <BN
            onPress={() => showToast({ message: "Just FYI", severity: "info" })}
          >
            Info
          </BN>
          <BN
            onPress={() =>
              showToast({ message: "Check again", severity: "warning" })
            }
          >
            Warning
          </BN>
        </>
        <Banner
          variant="info"
          text="Welcome to your new app! Check out the widgets below."
        />
        <Divider />
        {/* Accordion examples showcase */}
        <AccordionExamples />
        {/* Standalone usage with controlled state */}
        <AccordionItem
          title="Custom Item"
          isOpen={isOpen}
          onToggle={(newState) => setIsOpen(newState)}
        >
          <CustomComponent />
        </AccordionItem>

        {/* Standalone usage with uncontrolled state */}
        <AccordionItem title="Auto-managed Item" defaultOpen>
          <CustomComponent />
        </AccordionItem>

        <Accordion
          data={[
            {
              title: "Section 1",
              content: "This is the content of section 1.",
            },
            {
              title: "Section 2",
              content: "This is the content of section 2.",
            },
            {
              title: "Section 3",
              content: "This is the content of section 3.",
            },
          ]}
          allowMultiple
        />
        <Text variant="displayLarge">displayLarge</Text>
        <Text variant="displayMedium">displayMedium</Text>
        <Text variant="displaySmall">displaySmall</Text>
        <Text variant="headlineLarge">headlineLarge</Text>
        <Text variant="headlineMedium">headlineMedium</Text>
        <Text variant="headlineSmall">headlineSmall</Text>
        <Text variant="titleLarge">titleLarge</Text>
        <Text variant="titleMedium">titleMedium</Text>
        <Text variant="titleSmall">titleSmall</Text>
        <Text variant="bodyLarge">bodyLarge</Text>
        <Text variant="bodyMedium">bodyMedium</Text>
        <Text variant="bodySmall">bodySmall</Text>
        <Text variant="labelLarge">labelLarge</Text>
        <Text variant="labelMedium">labelMedium</Text>
        <Text variant="labelSmall">labelSmall</Text>
        <Button label="Click me" variant="danger" />
        <Button label="Click me" variant="outlined" />
        <Button label="Click me" variant="primary" />
        <Button label="Click me" variant="secondary" />
        <Button label="Click me" variant="tertiary" />
        <Button label="Click me" variant="text" />
        <IconButton backgroundColor="red" iconName="heart" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Counter
            initialValue={1}
            minValue={0}
            maxValue={999}
            onValueChange={(value: number) =>
              console.log("Counter value changed:", value)
            }
          />
          <Counter
            initialValue={1}
            minValue={0}
            maxValue={999}
            onValueChange={(value: number) =>
              console.log("Counter value changed:", value)
            }
          />
        </View>

        <FormSkeleton fields={3} />
        <ImageCarousel
          images={[
            "https://picsum.photos/300/200?random=1",
            "https://picsum.photos/300/200?random=2",
            "https://picsum.photos/300/200?random=3",
          ]}
          height={250}
        />
        <Input name="name" placeholder="Enter your name" label="Name" />
        <Password name={"sss"} type={FieldTypes.PASSWORD} label={"Password"} />

        <Select
          name="option"
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Option C", value: "c" },
          ]}
        />
        <DateInput name={"ssss"} format={"DD/MM/YYYY"} />
        <NumericInput name={"dddddd"} />
        <PaymentMethodRadioGroup
          name="paymentMethod"
          options={[
            {
              label: "PayPal",
              value: "paypal",
              icon: "apple",
              description: "Pay using your PayPal account",
            },
            {
              label: "Apple Pay",
              value: "apple",
              icon: "apple",
              description: "Pay with Apple Pay",
            },
          ]}
        />
        <FormPicker
          name={"demoPicker"}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Orange", value: "orange" },
          ]}
        />
        <RadioGroup
          name={"favoriteFruit"}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Orange", value: "orange" },
          ]}
        />
        <SearchBar
          name={""}
          containerStyle={{
            height: 55,
          }}
        />
        <SelectDropdown
          name="dropdown"
          label="Choose an option"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
            { label: "Option 6", value: "6" },
            { label: "Option 7", value: "7" },
            { label: "Option 8", value: "8" },
            { label: "Option 9", value: "9" },
            { label: "Option 10", value: "10" },
            { label: "Option 11", value: "11" },
            { label: "Option 12", value: "12" },
            { label: "Option 13", value: "13" },
            { label: "Option 14", value: "14" },
            { label: "Option 15", value: "15" },
            { label: "Option 16", value: "16" },
            { label: "Option 17", value: "17" },
            { label: "Option 18", value: "18" },
            { label: "Option 19", value: "19" },
            { label: "Option 20", value: "20" },
            { label: "Option 21", value: "21" },
            { label: "Option 22", value: "22" },
            { label: "Option 23", value: "23" },
            { label: "Option 24", value: "24" },
            { label: "Option 25", value: "25" },
            { label: "Option 26", value: "26" },
            { label: "Option 27", value: "27" },
            { label: "Option 28", value: "28" },
            { label: "Option 29", value: "29" },
            { label: "Option 30", value: "30" },
          ]}
        />
        <Slider value={sliderValue} onValueChange={setSliderValue} />
        {/* <StyledCheckbox name={"dfdfd"} title={"dfdfd"} description={"fdfd"} /> */}
        <SwitchInput
          name={"dddd"}
          options={[
            { label: "On", value: true, description: "Switch is enabled" },
            { label: "Off", value: false, description: "Switch is disabled" },
          ]}
        />
        <SDKView uri="https://google.com" />
        {/* <Navigate to="/home">Home</Navigate> */}
        {/* <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: Try it</ThemedText>
          <ThemedText>
            Edit{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            to see changes. Press{" "}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </ThemedText>{" "}
            to open developer tools.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/modal">
            <Link.Trigger>
              <ThemedText type="subtitle">Step 2: Explore</ThemedText>
            </Link.Trigger>
            <Link.Preview />
            <Link.Menu>
              <Link.MenuAction
                title="Action"
                icon="cube"
                onPress={() => alert("Action pressed")}
              />
              <Link.MenuAction
                title="Share"
                icon="square.and.arrow.up"
                onPress={() => alert("Share pressed")}
              />
              <Link.Menu title="More" icon="ellipsis">
                <Link.MenuAction
                  title="Delete"
                  icon="trash"
                  destructive
                  onPress={() => alert("Delete pressed")}
                />
              </Link.Menu>
            </Link.Menu>
          </Link>

          <ThemedText>
            {`Tap the Explore tab to learn more about what's included in this starter app.`}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
          <ThemedText>
            {`When you're ready, run `}
            <ThemedText type="defaultSemiBold">
              npm run reset-project
            </ThemedText>{" "}
            to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
            directory. This will move the current{" "}
            <ThemedText type="defaultSemiBold">app</Themed>{" "}
            to{" "}
            <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
        </ThemedView> */}
      </ParallaxScrollView>
    </FormProvider>
  );
}
