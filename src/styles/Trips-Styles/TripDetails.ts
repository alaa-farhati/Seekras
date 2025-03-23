
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 220,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    top: 48,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    fontWeight: '600',
    color: '#007AFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 8,
  },
  descriptionContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  teammatesContainer: {
    marginBottom: 24,
  },
  teammatesList: {
    flexDirection: 'row',
    marginTop: 8,
  },
  teammateItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  teammateAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  teammateName: {
    fontSize: 14,
    color: '#333',
  },
  addTeammate: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  addTeammateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  weatherContainer: {
    marginBottom: 24,
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  weatherDay: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    width: '30%',
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
  suppliesContainer: {
    padding: 16,
  },
  suppliesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addSupplyButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  addSupplyText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  supplyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  supplyInfo: {
    flex: 1,
  },
  supplyName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  supplyAssigned: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assignedLabel: {
    fontSize: 14,
    color: '#666',
  },
  assignedName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  supplyStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  confirmedStatus: {
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  pendingStatus: {
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  activitiesContainer: {
    padding: 16,
  },
  activitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addActivityButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  addActivityText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  activityTimeline: {
    width: 24,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 4,
    marginLeft: 5,
  },
  activityContent: {
    flex: 1,
    marginLeft: 12,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  activityDetails: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  activityDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  bottomButtonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    top:-20
  },
  mainActionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  mainActionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});