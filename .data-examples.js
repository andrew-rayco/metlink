// e.g. https://www.metlink.org.nz/api/v1/StopDepartures/4125
let stopDepartures = {
  LastModified: "2017-12-01T14:29:49+13:00",
  Stop: {
    Name: "Wadestown Road opposite Lytton Street",
    Sms: "4125",
    Farezone: "2",
    Lat: -41.2615297,
    Long: 174.7696077,
    LastModified: "2017-12-01T00:00:56+13:00",
    Icon: "/assets/StopImages/4125.jpg"
  },
  Services: [
    {
      ServiceID: "14",
      IsRealtime: true,
      VehicleRef: "2528",
      Direction: "Outbound",
      OperatorRef: "NZBS",
      OriginStopID: "4136",
      OriginStopName: "Wilton-SurreySt",
      DestinationStopID: "6346",
      DestinationStopName: "Rongotai",
      AimedArrival: "2017-12-01T14:57:00+13:00",
      AimedDeparture: "2017-12-01T14:57:00+13:00",
      VehicleFeature: "lowFloor",
      DepartureStatus: "onTime",
      ExpectedDeparture: "2017-12-01T14:57:37+13:00",
      DisplayDeparture: "2017-12-01T14:57:37+13:00",
      DisplayDepartureSeconds: 1679,
      Service: {
        Code: "14",
        TrimmedCode: "14",
        Name: "Rongotai - Wellington - Wilton",
        Mode: "Bus",
        Link: "/timetables/bus/14"
      }
    }, {
      ServiceID: "14",
      IsRealtime: true,
      VehicleRef: "2088",
      Direction: "Outbound",
      OperatorRef: "NZBS",
      OriginStopID: "5139",
      OriginStopName: "CardinalMcKeefrySch",
      DestinationStopID: "6346",
      DestinationStopName: "Rongotai",
      AimedArrival: "2017-12-01T15:27:00+13:00",
      AimedDeparture: "2017-12-01T15:27:00+13:00",
      VehicleFeature: "lowFloor",
      DepartureStatus: "early",
      ExpectedDeparture: "2017-12-01T15:23:57+13:00",
      DisplayDeparture: "2017-12-01T15:23:57+13:00",
      DisplayDepartureSeconds: 3259,
      Service: {
        Code: "14",
        TrimmedCode: "14",
        Name: "Rongotai - Wellington - Wilton",
        Mode: "Bus",
        Link: "/timetables/bus/14"
      }
    }
  ]
}

// e.g. https://www.metlink.org.nz/api/v1/ServiceLocation/14
let serviceLocation = {
  LastModified: "2017-12-01T14:32:51+13:00",
  Services: [
    {
      RecordedAtTime: "2017-12-01T14:32:53+13:00",
      VehicleRef: "1490",
      ServiceID: "14",
      HasStarted: true,
      DepartureTime: "2017-12-01T13:50:00+13:00",
      OriginStopID: "4136",
      OriginStopName: "Wilton-SurreySt",
      DestinationStopID: "6346",
      DestinationStopName: "AirportRetailPk",
      Direction: "Outbound",
      Bearing: "174",
      BehindSchedule: true,
      VehicleFeature: "lowFloor",
      DelaySeconds: 233,
      Lat: "-41.2941170",
      Long: "174.8007660",
      Service: {
        Code: "14",
        TrimmedCode: "14",
        Name: "Wilton - Wellington - Rongotai",
        Mode: "Bus",
        Link: "/timetables/bus/14"
      }
    }, {
      RecordedAtTime: "2017-12-01T14:32:43+13:00",
      VehicleRef: "1544",
      ServiceID: "14",
      HasStarted: true,
      DepartureTime: "2017-12-01T14:08:00+13:00",
      OriginStopID: "5000",
      OriginStopName: "CourtenayPl-Paramou",
      DestinationStopID: "5113",
      DestinationStopName: "MolesworthSt-Superm",
      Direction: "Inbound",
      Bearing: "174",
      BehindSchedule: true,
      VehicleFeature: "lowFloor",
      DelaySeconds: 255,
      Lat: "-41.2651100",
      Long: "174.7642975",
      Service: {
        Code: "14",
        TrimmedCode: "14",
        Name: "Rongotai - Wellington - Wilton",
        Mode: "Bus",
        Link: "/timetables/bus/14"
      }
    }
  ]
}
