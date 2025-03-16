import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import dummyWeatherData from '../../data/DummyWeather';
import { Icon } from '../../assets/Icons/Index';

interface WeatherData {
  current: {
    location: string;
    temperature: number;
    condition: string;
    icon: string;
    date: string;
  };
  hourlyForecast: { time: string; temperature: number; icon: string }[];
  dailyForecast: { day: string; temperature: number; icon: string }[];
}

interface RouteParams {
  tripId?: string;
  tripDates?: string[];
  tripLocation?: string;
}

interface TripWeather {
  date: string;
  icon: string;
  temperature: number;
}

const WeatherScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { tripId, tripDates, tripLocation } = route.params as RouteParams || {};
  
  const [weatherData, setWeatherData] = useState<WeatherData>(dummyWeatherData);
  const [city, setCity] = useState<string>(tripLocation || 'Tataouine, Tataouine Governorate, Tunisia');
  const [searchCity, setSearchCity] = useState<string>('');
  const [showTripWeather, setShowTripWeather] = useState<boolean>(!!tripId);
  
  // Generate trip weather data based on the trip dates
  const [tripWeather, setTripWeather] = useState<TripWeather[]>([
    { date: 'Jan 6', icon: '01d', temperature: 23 },
    { date: 'Jan 7', icon: '02d', temperature: 22 },
    { date: 'Jan 8', icon: '10d', temperature: 19 }
  ]);

  useEffect(() => {
    // In a real app, you would fetch weather data here based on the city
    // For now, we're using dummy data, so we don't need to fetch anything
    if (searchCity !== '') {
      // You would fetch data based on searchCity here
      // For dummy data, we'll just update the city name
      setCity(searchCity);
      // Reset trip weather focus when searching new location
      setShowTripWeather(false);
    }
  }, [searchCity]);

  useEffect(() => {
    // If trip location is provided, set it as the current city
    if (tripLocation) {
      setCity(tripLocation);
      setShowTripWeather(true);
      // In a real app, you would fetch weather data for the trip location and dates
    }
  }, [tripLocation]);

  const getWeatherIcon = (iconCode: string) => {
    // Replace with your actual icon mapping
    const iconMap: { [key: string]: string } = {
      "01d": "01d", // Sunny
      "02d": "02d", // Few clouds
      "03d": "03d", // Scattered clouds
      "09d": "09d", // Shower rain
      "10d": "10d", // Rain
      "11d": "11d", // Thunderstorm
    };
    return iconMap[iconCode] || "01d"; // Default to sunny if not found
  };

  const getIconComponent = (iconName: string, size: number, color: string) => {
    // Map weather conditions to appropriate icons
    switch(iconName) {
      case "01d": return <Icon name="sunny-outline" size={size} color={color} />;
      case "02d": return <Icon name="partly-sunny-outline" size={size} color={color} />;
      case "03d": return <Icon name="cloud-outline" size={size} color={color} />;
      case "09d": return <Icon name="rainy-outline" size={size} color={color} />;
      case "10d": return <Icon name="rainy-outline" size={size} color={color} />;
      case "11d": return <Icon name="flash-outline" size={size} color={color} />;
      default: return <Icon name="sunny-outline" size={size} color={color} />;
    }
  };

  const handleBackToTrip = () => {
    // if (tripId) {
    //   navigation.navigate('TripDetails', { tripId });
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search location"
          value={searchCity}
          onChangeText={setSearchCity}
          onSubmitEditing={() => {}} // Trigger useEffect on submit
        />
        <Icon name="search-outline" size={24} color="#000" style={styles.searchIcon} />
      </View>

      {/* Trip Weather Section (visible when coming from trip details) */}
      {showTripWeather && tripId && (
        <View style={styles.tripWeatherContainer}>
          <View style={styles.tripWeatherHeader}>
            <Text style={styles.tripWeatherTitle}>Trip Weather Forecast</Text>
            <TouchableOpacity 
              style={styles.backToTripButton}
              onPress={handleBackToTrip}
            >
              <Text style={styles.backToTripText}>Back to Trip</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.weatherRow}>
            {tripWeather.map((weather, index) => (
              <View key={index} style={styles.weatherDay}>
                <Text style={styles.weatherDate}>{weather.date}</Text>
                {getIconComponent(
                  weather.icon, 
                  28, 
                  weather.icon === '10d' || weather.icon === '09d' ? '#4A90E2' : '#FFB800'
                )}
                <Text style={styles.weatherTemp}>{weather.temperature}°C</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <View style={styles.weatherInfo}>
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.tempText}>{weatherData.current.temperature}°C</Text>
        <Text style={styles.dateText}>{weatherData.current.date}</Text>
      </View>

      <ScrollView horizontal style={styles.hourlyForecast} showsHorizontalScrollIndicator={false}>
        {weatherData.hourlyForecast.map((item, index) => (
          <View key={index} style={styles.hourlyItem}>
            <Text style={styles.hourlyTemp}>{item.temperature}°C</Text>
            <View style={styles.iconContainer}>
              {getIconComponent(item.icon, 24, item.icon.includes('rain') ? '#4A90E2' : '#FFB800')}
            </View>
            <Text style={styles.hourlyTime}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.forecastContainer}>
        <Text style={styles.forecastTitle}>7 days forecast</Text>
        {weatherData.dailyForecast.map((item, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.dayText}>{item.day}</Text>
            <View style={styles.forecastMiddle}>
              {getIconComponent(item.icon, 24, item.icon.includes('rain') ? '#4A90E2' : '#FFB800')}
            </View>
            <Text style={styles.forecastTemp}>{item.temperature}°C</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  tripWeatherContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  tripWeatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tripWeatherTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  backToTripButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  backToTripText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherDay: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  weatherDate: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  weatherTemp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  weatherInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tempText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  hourlyForecast: {
    marginBottom: 20,
  },
  hourlyItem: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    minWidth: 80,
  },
  hourlyTemp: {
    fontSize: 16,
    fontWeight: '500',
  },
  hourlyTime: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  iconContainer: {
    margin: 10,
    height: 24,
  },
  forecastContainer: {
    marginBottom: 20,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  forecastMiddle: {
    flex: 1,
    alignItems: 'center',
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  }
});

export default WeatherScreen;